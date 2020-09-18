import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShakesRoutingModule } from './shakes-routing.module';

import { SharedModule } from '@app/order/shared/shared.module';

import { ShakesComponent } from './container/shakes.component';


@NgModule({
  imports: [
    CommonModule,
    ShakesRoutingModule,
    SharedModule
  ],
  declarations: [ ShakesComponent ]
})
export class ShakesModule {}