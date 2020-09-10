import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-payment-modal',
    templateUrl: './payment-modal.component.html',
    styleUrls: [ './payment-modal.component.scss' ],
    encapsulation: ViewEncapsulation.None
})
export class PaymentModalComponent {
cartTotal: number;
cartSubTotal: number;
cartTax: number;

constructor() {}

}