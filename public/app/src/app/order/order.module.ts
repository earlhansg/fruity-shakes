import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// routing 
import { OrderRoutingModule } from './order-routing.module';
// module 
import { SharedModule } from './shared/shared.module';
// component
import { OrderComponent } from './container/order.component';

@NgModule({
    imports: [
        BrowserModule,
        OrderRoutingModule,
        SharedModule
    ],
    declarations: [ OrderComponent ]
})
export class OrderModule {}