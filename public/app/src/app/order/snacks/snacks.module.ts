import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// routing 
import { SnacksRoutingModule } from './snacks-routing.module';
// modules
import { SharedModule } from '@app/order/shared/shared.module';
// components 
import { SnacksComponent } from './container/snacks.component';


@NgModule({
  imports: [
    CommonModule,
    SnacksRoutingModule,
    SharedModule.forRoot()
  ],
  declarations: [ SnacksComponent ]
})
export class SnacksModule {}