import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-receipt-modal',
    templateUrl: './receipt-modal.component.html',
    styleUrls: [ './receipt-modal.component.scss' ],
    encapsulation: ViewEncapsulation.None
})
export class ReceiptModalComponent implements OnInit{

title: string;
cashReceived: number;
change: number;
 
constructor(public bsModalRef: BsModalRef) {}
 
ngOnInit() {}

}