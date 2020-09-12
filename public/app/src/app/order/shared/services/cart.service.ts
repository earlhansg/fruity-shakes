import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
// model 
import { Cart } from '@order/shared/models/cart.model';

@Injectable({ providedIn: 'root' })
export class CartService {

form = this.fb.group({
    items: this.fb.array([])
})

constructor(private fb: FormBuilder) {}

createItem(item) {
    return new FormGroup({
        orderId: new FormControl(parseInt(item._id, 10) || ''),
        quantity: new FormControl(item.quantity || 1),
        price: new FormControl(item.price),
        name: new FormControl(item.name)
    });
}

addtoCart(item: Cart) {
    const control = this.form.get('items') as FormArray;
    control.push(this.createItem(item));
}

get items() {
    return (this.form.get('items') as FormArray).controls;
}

resetCartForm() {
    const control = <FormArray>this.form.controls['items'];
    for(let i = control.length-1; i >= 0; i--) {
        control.removeAt(i)
    }
}

}