import { Component, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

import { Observable, BehaviorSubject, combineLatest, Subscription } from 'rxjs';
import { tap, map, share, startWith } from 'rxjs/operators';

import { CartService } from '@order/shared/services/cart.service';

import { Cart } from '@order/shared/models/cart.model';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnDestroy {

  @Input()
  parent: FormGroup;

  @Output()
  removeItem = new EventEmitter<any>();
  @Output()
  pay = new EventEmitter<any>();

  subscription$: Subscription;
  tax$ = new BehaviorSubject<number>(0);

  todayDate = new Date();
  displaySubTotal: number;
  displayTotal: number;


  constructor(private cartService: CartService) {
    this.subscription$ = combineLatest([this.subTotal, this.total])
      .subscribe(value => {
        this.displaySubTotal = value[0];
        this.displayTotal = value[1];
      })
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  get orders(): AbstractControl[] {
    return this.cartService.items;
  }

  removeToCart(group, index): void {
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
        tap(total => this.tax$.next(total* 0.1)),
        startWith(0),
        share()
      )
  }

  get total(): Observable<number> {
    return combineLatest([this.subTotal, this.tax$])
      .pipe(
        map(([subTotal, tax]) =>  subTotal + tax ),
        startWith(0)
      )
  }

  submitForm(): void {
    this.pay.emit([this.displaySubTotal, this.tax$.value, this.displayTotal]);
  }

}
