import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// components 
import { ShakesComponent } from './container/shakes.component';
// routing 
import { ShakesRoutingModule } from './shakes-routing.module';


@NgModule({
  imports: [
    CommonModule,
    ShakesRoutingModule
  ],
  declarations: [ ShakesComponent ]
})
export class ShakesModule {}