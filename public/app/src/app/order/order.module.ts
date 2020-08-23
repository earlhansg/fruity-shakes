import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// routing 
import { OrderRoutingModule } from './order-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        OrderRoutingModule
    ]
})
export class OrderModule {}