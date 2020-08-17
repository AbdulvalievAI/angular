import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardChild2Component } from './card-child2.component';

const routes: Routes = [
  {
    path: '',
    component: CardChild2Component,
    children: [
      {
        path: 'card-child2-child',
        data: {
          breadcrumbs: 'Card Child2 Child',
        },
        loadChildren: () =>
          import('../card-child2-child/card-child2-child.module').then(
            (m) => m.CardChild2ChildModule
          ),
      },
      {
        path: 'card-child2-child2',
        data: {
          breadcrumbs: 'Card Child2 Child2',
        },
        loadChildren: () =>
          import('../card-child2-child2/card-child2-child2.module').then(
            (m) => m.CardChild2Child2Module
          ),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardChild2RoutingModule {}
