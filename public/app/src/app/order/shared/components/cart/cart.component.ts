import { Component, Input } from '@angular/core';
import { Cart } from '@order/shared/models/cart.model';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: [ './cart.component.scss' ]
})
export class CartComponent {
@Input()
orders: Cart[];

constructor() {}

}