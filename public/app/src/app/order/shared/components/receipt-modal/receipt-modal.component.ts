import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// ngx-bootstrap 
import { BsModalRef } from 'ngx-bootstrap/modal';
// model
import { Cart } from '@order/shared/models/cart.model';

@Component({
    selector: 'app-receipt-modal',
    templateUrl: './receipt-modal.component.html',
    styleUrls: [ './receipt-modal.component.scss' ],
    encapsulation: ViewEncapsulation.None
})
export class ReceiptModalComponent implements OnInit{

title: string;
total: number;
subTotal: number;
tax: number;
cashReceived: number;
change: number;
items: Cart[];
 
constructor(public bsModalRef: BsModalRef) {}
 
ngOnInit() {}

}