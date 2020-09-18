import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { OrderRoutingModule } from './order-routing.module';

import { SharedModule } from './shared/shared.module';

import { OrderComponent } from './container/order.component';


@NgModule({
    imports: [
        BrowserModule,
        OrderRoutingModule,
        SharedModule.forRoot()
    ],
    declarations: [ OrderComponent ]
})
export class OrderModule {}