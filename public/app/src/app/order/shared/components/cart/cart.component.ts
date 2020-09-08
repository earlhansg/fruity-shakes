import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Cart } from '@order/shared/models/cart.model';

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

constructor(private fb: FormBuilder) {}

get orders() {
    return (this.parent.get('items') as FormArray).controls;
}

}