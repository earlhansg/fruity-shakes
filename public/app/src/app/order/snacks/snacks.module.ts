import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnacksRoutingModule } from './snacks-routing.module';

import { SharedModule } from '@app/order/shared/shared.module';

import { SnacksComponent } from './container/snacks.component';


@NgModule({
  imports: [
    CommonModule,
    SnacksRoutingModule,
    SharedModule
  ],
  declarations: [ SnacksComponent ]
})
export class SnacksModule {}