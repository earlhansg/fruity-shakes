import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, AbstractControl } from '@angular/forms';

import { Cart } from '@order/shared/models/cart.model';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  form = this.fb.group({
    items: this.fb.array([])
  })


  constructor(private fb: FormBuilder) {}

  createItem(item: Cart): FormGroup {
    return new FormGroup({
      _id: new FormControl(item._id),
      quantity: new FormControl(item.quantity || 1),
      price: new FormControl(item.price),
      name: new FormControl(item.name)
    });
  }

  addtoCart(item: Cart): void {
    const control = this.form.get('items') as FormArray;
    control.push(this.createItem(item));
  }

  get items(): AbstractControl[] {
    return (this.form.get('items') as FormArray).controls;
  }

  existInCart(id: string, details = false): any {
    const cartItems = this.form.get('items').value;
    if(!details) {
      return Boolean(cartItems.find((item: Cart) => item._id === id));
    }
    else return cartItems.find((item: Cart) => item._id === id);
  }

  itemIndex(id: string): number {
    const cartItems = this.form.get('items').value;
    return cartItems.findIndex((item: Cart) => item._id === id);
  }

  resetCartForm(): void {
    const control = this.form.controls.items as FormArray;
    for(let i = control.length-1; i >= 0; i--) {
      control.removeAt(i)
    }
  }

  updateItemQuantity(value: number, index: number): void {
    const quantity = value + 1;
    const control = (this.form.controls.items as FormArray).at(index);
    control.patchValue({quantity});
  }

}