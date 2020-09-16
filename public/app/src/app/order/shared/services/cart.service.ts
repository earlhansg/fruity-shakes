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
        _id: new FormControl(item._id),
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

existInCart(id: string, details = false) {
    const cartItems = this.form.get('items').value;
    if(!details) {
        return Boolean(cartItems.find((item: Cart) => item._id === id));
    }
    else return cartItems.find((item: Cart) => item._id === id);
}

itemIndex(id: string) {
    const cartItems = this.form.get('items').value;
    return cartItems.findIndex((item: Cart) => item._id === id);
}

resetCartForm() {
    const control = <FormArray>this.form.controls['items'];
    for(let i = control.length-1; i >= 0; i--) {
        control.removeAt(i)
    }
}

updateItemQuantity(value: number, index: number) {
    const quantity = value + 1;
    const control = (this.form.controls['items'] as FormArray).at(index);
    control.patchValue({quantity});
}

}