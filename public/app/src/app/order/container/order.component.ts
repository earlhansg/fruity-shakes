import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ReceiptModalComponent } from '@app/order/shared/components/receipt-modal/receipt-modal.component';
import { PaymentModalComponent } from '@app/order/shared/components/payment-modal/payment-modal.component';
// service 
import { CartService } from '@order/shared/services/cart.service';

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: [ './order.component.scss' ]
})
export class OrderComponent implements OnInit {
bsModalRef: BsModalRef;
config = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false,
    class: "modal-dialog-centered custom-modal"
};
form: FormGroup;

constructor(private modalService: BsModalService,
            private cartService: CartService) {}


ngOnInit() {
    // this.openModalWithComponent();
    this.form = this.cartService.form;
}

openModalWithComponent() {
    const initialState = {
      title: 'Modal with component'
    };

    this.bsModalRef = this.modalService.show(ReceiptModalComponent, 
        Object.assign(this.config, {initialState}));
}

// openModalWithComponent() {
//     const initialState = {
//         cartTotal: 24.20
//     };

//     this.bsModalRef = this.modalService.show(PaymentModalComponent, 
//         Object.assign(this.config, {initialState}));
// }


}