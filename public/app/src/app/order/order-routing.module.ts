import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'order',
    children: [
      {
        path: 'shakes',
        loadChildren: () => import('./shakes/shakes.module')
        .then(mod => mod.ShakesModule)
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