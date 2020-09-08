import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ReceiptModalComponent } from '@app/order/shared/components/receipt-modal/receipt-modal.component';
import { PaymentModalComponent } from '@app/order/shared/components/payment-modal/payment-modal.component';
import { CartService } from '../shared/services/cart.service';
import { Observable } from 'rxjs';
import { Cart } from '../shared/models/cart.model';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';

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

// cart$: Observable<Cart[]>;

form = this.fb.group({
    items: this.fb.array([])
})

constructor(private modalService: BsModalService,
            private cartService: CartService,
            private fb: FormBuilder) {}


ngOnInit() {
    // this.openModalWithComponent();
    // this.cart$ = this.cartService.orders;
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

createItem(item) {
    return new FormGroup({
        orderId: new FormControl(parseInt(item._id, 10) || ''),
        quantity: new FormControl(item.quantity || 1),
        price: new FormControl(item.price),
        name: new FormControl(item.name)
    });
}

addtoCart() {
    const control = this.form.get('items') as FormArray;
    control.push(this.createItem({_id: 22111, quantity: 2, price: 200, name: 'Mango'}));
}


}