import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//component
import { OrderComponent } from './container/order.component';
// guard 
import { AuthGuard } from '@app/auth/shared/guards/auth.guard';

const routes: Routes = [
  {
    path: 'order',
    component: OrderComponent,
    children: [
      {
        path: 'shakes',
        canActivate: [AuthGuard],
        loadChildren: () => import('./shakes/shakes.module')
        .then(mod => mod.ShakesModule)
      },
      {
        path: 'snacks',
        canActivate: [AuthGuard],
        loadChildren: () => import('./snacks/snacks.module')
        .then(mod => mod.SnacksModule)
      },
      {
        path: '',
        redirectTo: 'shakes',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }