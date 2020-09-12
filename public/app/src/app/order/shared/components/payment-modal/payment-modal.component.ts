import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ReceiptModalComponent } from '@app/order/shared/components/receipt-modal/receipt-modal.component';
import { CartService } from '@app/order/shared/services/cart.service';

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

bsModalRef: BsModalRef;
config = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false,
    class: "modal-dialog-centered custom-modal"
};

paymentForm: FormGroup;

constructor(private fb: FormBuilder,
            private modalService: BsModalService,
            private cartService: CartService) {}

ngOnInit() {
    this.paymentForm = this.fb.group({
        money: ['', [Validators.required, Validators.min(this.cartTotal)]]
    })
}

enterPayment() {
    console.log(this.paymentForm.get('money').value);
}

}