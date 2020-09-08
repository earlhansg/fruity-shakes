import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// routing 
import { ShakesRoutingModule } from './shakes-routing.module';
// modules
import { SharedModule } from '@app/order/shared/shared.module';
// components 
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