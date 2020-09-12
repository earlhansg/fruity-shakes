import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ReceiptModalComponent } from '@app/order/shared/components/receipt-modal/receipt-modal.component';
import { CartService } from '@app/order/shared/services/cart.service';
import { Cart } from '@app/order/shared/models/cart.model';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-payment-modal',
    templateUrl: './payment-modal.component.html',
    styleUrls: [ './payment-modal.component.scss' ],
    encapsulation: ViewEncapsulation.None
})
export class PaymentModalComponent implements OnInit {
cartTotal: number;
cartSubTotal: number;
cartTax: number;
cartItems: Cart[];
config: any;

bsModalRef: BsModalRef;

paymentForm: FormGroup;
isClose = new BehaviorSubject<boolean>(false)

constructor(private fb: FormBuilder,
            private modalService: BsModalService,
            private cartService: CartService) {}

ngOnInit() {
    this.cartItems = this.cartService.form.get('items').value;
    this.paymentForm = this.fb.group({
        money: ['', [Validators.required, Validators.min(this.cartTotal)]]
    })
}

enterPayment() {
    const cashReceived = this.paymentForm.get('money').value;
    const change = cashReceived - this.cartTotal;
    const initialState = {
        cartTotal: this.cartTotal, 
        cartSubTotal: this.cartSubTotal, 
        cartTax: this.cartTax,
        cashReceived,
        change,
        cartItems: this.cartItems
    };

    this.bsModalRef = this.modalService.show(ReceiptModalComponent, 
        Object.assign(this.config, {initialState}));
    this.paymentForm.reset();
    this.cartService.resetCartForm();
    this.isClose.next(true);
}

}