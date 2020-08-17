import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayComponent } from './pay.component';

const routes: Routes = [
  {
    path: '',
    component: PayComponent,
    children: [
      {
        path: 'pay-child',
        data: {
          breadcrumbs: 'Pay Child'
        },
        loadChildren: () =>
          import('../pay-child/pay-child.module').then(
            (m) => m.PayChildModule
          ),
      },
      {
        path: 'pay-child2',
        data: {
          breadcrumbs: 'Pay Child2'
        },
        loadChildren: () =>
          import('../pay-child2/pay-child2.module').then(
            (m) => m.PayChild2Module
          ),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayRoutingModule {}
