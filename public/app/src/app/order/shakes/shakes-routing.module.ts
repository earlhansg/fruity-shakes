import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// component
import { ShakesComponent } from './container/shakes.component';


export const ROUTES: Routes = [
  {
    path: '',
    component: ShakesComponent
  }
];


@NgModule({
  imports: [ RouterModule.forChild(ROUTES) ],
  exports: [ RouterModule ]
})
export class ShakesRoutingModule {}