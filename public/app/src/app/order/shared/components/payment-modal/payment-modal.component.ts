import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BehaviorSubject } from 'rxjs';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { CartService } from '@app/order/shared/services/cart.service';
import { ReceiptService } from '@app/order/shared/services/receipt.service';
import { Cart } from '@app/order/shared/models/cart.model';

import { ReceiptModalComponent } from '@app/order/shared/components/receipt-modal/receipt-modal.component';

@Component({
  selector: 'app-payment-modal',
  templateUrl: './payment-modal.component.html',
  styleUrls: ['./payment-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PaymentModalComponent implements OnInit {

  isClose = new BehaviorSubject<boolean>(false)

  paymentForm: FormGroup;
  bsModalRef: BsModalRef;
  cartTotal: number;
  cartSubTotal: number;
  cartTax: number;
  cartItems: Cart[];
  config: any;


  constructor(
    private fb: FormBuilder,
    private modalService: BsModalService,
    private cartService: CartService,
    private receiptService: ReceiptService
  ) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.form.get('items').value;
    this.paymentForm = this.fb.group({
      money: ['', [Validators.required, Validators.min(this.cartTotal)]]
    })
  }

  async enterPayment() {
    const cashReceived = this.paymentForm.get('money').value;
    const change = cashReceived - this.cartTotal;
    const initialState = {
      total: this.cartTotal,
      subTotal: this.cartSubTotal,
      tax: this.cartTax,
      cashReceived,
      change,
      items: this.cartItems
    };
    const payment =  await this.receiptService.addReceipt(initialState);
    if(payment) {
      this.bsModalRef = this.modalService
        .show(ReceiptModalComponent, Object.assign(this.config, {initialState}));
      this.cartService.resetCartForm();
      this.paymentForm.reset();
      this.isClose.next(true);
    }
  }

}
