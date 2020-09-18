import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SnacksComponent } from './container/snacks.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: SnacksComponent
  }
];


@NgModule({
  imports: [ RouterModule.forChild(ROUTES) ],
  exports: [ RouterModule ]
})
export class SnacksRoutingModule {}