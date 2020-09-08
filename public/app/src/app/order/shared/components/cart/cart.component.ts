import { Component, Input } from '@angular/core';
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

constructor(private cartService: CartService) {}

get orders() {
    return this.cartService.items;
}

}