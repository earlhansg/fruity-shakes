import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { CartService } from '@order/shared/services/cart.service';

import { PaymentModalComponent } from '@app/order/shared/components/payment-modal/payment-modal.component';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  bsModalRef: BsModalRef;

  config = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false,
    class: 'modal-dialog-centered custom-modal'
  };
  form: FormGroup;


  constructor(
    private modalService: BsModalService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.form = this.cartService.form;
  }

  onRemoveItem({ index }: { index: number }): void {
    const control = this.cartService.form.get('items') as FormArray;
    control.removeAt(index);
  }

  onPay([cartSubTotal, cartTax, cartTotal]): void {
    const initialState = { cartTotal, cartSubTotal, cartTax, config: this.config };
    this.bsModalRef = this.modalService
      .show(PaymentModalComponent,Object.assign(this.config, {initialState}));
    this.bsModalRef.content.isClose
      .subscribe(closePaymentModal => closePaymentModal ? this.bsModalRef.hide():  null)
  }

}
