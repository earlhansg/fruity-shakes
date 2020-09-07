import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// modules 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule} from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
// components 
import { HeaderComponent } from './components/header/header.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { CartComponent } from './components/cart/cart.component';
import { ReceiptModalComponent } from './components/receipt-modal/receipt-modal.component';
import { PaymentModalComponent } from './components/payment-modal/payment-modal.component';
// services
import { ShakeService } from './services/shake.service';
import { SnackService } from './services/snack.service';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FontAwesomeModule,
        RouterModule,
        ModalModule.forRoot()
    ],
    declarations: [
        HeaderComponent,
        OrderListComponent,
        CartComponent,
        ReceiptModalComponent,
        PaymentModalComponent
    ],
    exports: [
        HeaderComponent,
        OrderListComponent,
        CartComponent,
        ReceiptModalComponent,
        PaymentModalComponent,
        FontAwesomeModule
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders<any> {
        return {
          ngModule: SharedModule,
          providers: [
            ShakeService,
            SnackService
          ]
        };
    }
}