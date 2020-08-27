import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ReceiptModalComponent } from '@app/order/shared/components/receipt-modal/receipt-modal.component';

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
    class: "custom-modal"
};

constructor(private modalService: BsModalService) {}


ngOnInit() {
    this.openModalWithComponent();
}
openModalWithComponent() {
    const initialState = {
      title: 'Modal with component'
    };

    this.bsModalRef = this.modalService.show(ReceiptModalComponent, 
        Object.assign(this.config, {initialState}));
}

}