import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Cart } from '@order/shared/models/cart.model';

interface Order {
  name: string;
  src: string;
  price: number;
}


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent {

  @Input()
  items: Order[];

  @Output()
  addItem = new EventEmitter();


  constructor() { }

  addToCart(item: Cart): void {
    this.addItem.emit(item);
  }

}
