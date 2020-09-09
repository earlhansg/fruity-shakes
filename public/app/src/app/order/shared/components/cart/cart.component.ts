import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
// service
import { CartService } from '../../services/cart.service';

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

constructor(private cartService: CartService) {}

get orders() {
    return this.cartService.items;
}

removeToCart(group, index) {
    this.removeItem.emit({ group, index });
}

}