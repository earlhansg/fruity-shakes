import { Injectable } from '@angular/core';
// rxjs
import { BehaviorSubject } from 'rxjs';
// model 
import { Cart } from '../models/cart.model';

@Injectable({ providedIn: 'root' })
export class CartService {

items: Cart[] = [{ name: 'Mango', quantity: 1, price: 300 }];

private subject = new BehaviorSubject<Cart[]>(this.items);

get orders() {
    return this.subject.asObservable();
}

addToCart(order: Cart) {
    this.items.push(order);
}

}