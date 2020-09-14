import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
// service
import { ShakeService } from '@app/order/shared/services/shake.service';
import { CartService } from '@app/order/shared/services/cart.service';
// rxjs 
import { Observable } from 'rxjs';
// model
import { Order } from '@app/order/shared/models/order.model';
import { Cart } from '@app/order/shared/models/cart.model';
// icon
import { faSpinner } from '@fortawesome/free-solid-svg-icons';


@Component({
    selector: 'app-shakes',
    templateUrl: './shakes.component.html',
    styleUrls: [ './shakes.component.scss' ]
})
export class ShakesComponent implements OnInit {

shakes$: Observable<Order[]>;
faSpinner = faSpinner;

constructor(private shakeService: ShakeService,
            private cartService: CartService) {}

ngOnInit() {
    this.shakes$ = this.shakeService.getShakes();
}

onAddItem(item: Cart) {
    const isExist = this.cartService.existInCart(item._id);

    if(isExist) {
        const cartItem = this.cartService.existInCart(item._id, true);
        const index = this.cartService.itemIndex(item._id);
        this.cartService.updateItemQuantity(cartItem.quantity, index);
    }
    else this.cartService.addtoCart(item);
}

}