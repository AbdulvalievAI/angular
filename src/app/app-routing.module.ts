import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralComponent } from 'src/app/general/general.component';

const routes: Routes = [
  {
    path: '',
    component: GeneralComponent,
    children: [
      {
        path: '',
        redirectTo: 'card',
        pathMatch: 'full',
      },
      {
        path: 'card',
        data: {
          breadcrumbs: 'CARD'
        },
        loadChildren: () =>
        import('src/app/card/card.module').then(
          (m) => m.CardModule
        ),
      },
      {
        path: 'pay',
        data: {
          breadcrumbs: 'PAY'
        },
        loadChildren: () =>
          import('src/app/pay/pay.module').then(
            (m) => m.PayModule
          ),
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'card',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
