import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
// service
import { CartService } from '@order/shared/services/cart.service';
// rxjs 
import { Observable, BehaviorSubject, combineLatest, Subscription } from 'rxjs';
import { tap, map, share, startWith } from 'rxjs/operators';
// model 
import { Cart } from '@order/shared/models/cart.model';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: [ './cart.component.scss' ]
})
export class CartComponent {

@Input()
parent: FormGroup;

@Output()
removeItem = new EventEmitter<any>();

@Output()
pay = new EventEmitter<any>();

todayDate = new Date();

displaySubTotal: number;
displayTotal: number;
tax$ = new BehaviorSubject<number>(0);

subscription: Subscription;

constructor(private cartService: CartService) {
    this.subscription = combineLatest( [this.subTotal, this.total])
    .subscribe((value) => {
        this.displaySubTotal = value[0];
        this.displayTotal = value[1];
    })
}

ngOnDestroy() {
    this.subscription.unsubscribe();
}

get orders() {
    return this.cartService.items;
}

removeToCart(group, index) {
    this.removeItem.emit({ group, index });
}

get subTotal(): Observable<number> {
    return this.cartService.form.get('items')
    .valueChanges
    .pipe(
        map((items: Cart[]) => {
            return items.reduce((acc, curr) => {
                return acc + curr.price * curr.quantity;
            }, 0)
        }),
        tap((total) => this.tax$.next(total* 0.1)),
        startWith(0),
        share()
    )
}

get total(): Observable<number> {
    return combineLatest([this.subTotal, this.tax$])
    .pipe(
        map(([subTotal, tax]) =>  subTotal - tax ),
        startWith(0)
    )
}

submitForm() {
    this.pay.emit([this.displaySubTotal, this.tax$.value, this.displayTotal]);
}

}   