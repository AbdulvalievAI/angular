import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './card.component';

const routes: Routes = [
  {
    path: '',
    component: CardComponent,
    children: [
      {
        path: 'card-child',
        data: {
          breadcrumbs: 'Card Child'
        },
        loadChildren: () =>
          import('../card-child/card-child.module').then(
            (m) => m.CardChildModule
          ),
      },
      {
        path: 'card-child2',
        data: {
          breadcrumbs: 'Card Child 2'
        },
        loadChildren: () =>
          import('../card-child2/card-child2.module').then(
            (m) => m.CardChild2Module
          ),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardRoutingModule {}
