import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Cart } from '@order/shared/models/cart.model';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: [ './cart.component.scss' ]
})
export class CartComponent {
// @Input()
// orders: Cart[];

@Input()
parent: FormGroup;

constructor(private fb: FormBuilder,
            private cartService: CartService) {}

// get orders() {
//     return (this.parent.get('items') as FormArray).controls;
// }

get orders() {
    return this.cartService.items;
}

}