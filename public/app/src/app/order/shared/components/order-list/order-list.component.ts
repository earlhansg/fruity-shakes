import { Component, Input, Output, EventEmitter } from '@angular/core';
// model 
import { Cart } from '@order/shared/models/cart.model';

interface Order {
    name: string;
    src: string;
    price: number;
}

@Component({
    selector: 'app-order-list',
    templateUrl: './order-list.component.html',
    styleUrls: [ './order-list.component.scss' ]
})
export class OrderListComponent {
@Input()
items: Order[];

@Output()
addItem = new EventEmitter<Cart>();


constructor() {}

addToCart(item: Cart) {
    this.addItem.emit(item);
}

}