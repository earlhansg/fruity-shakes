import { Component, Input } from '@angular/core';

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

constructor() {}

}