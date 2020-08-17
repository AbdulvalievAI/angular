import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardChildComponent } from './card-child.component';

const routes: Routes = [
  {
    path: '',
    component: CardChildComponent,
    children: [
      {
        path: 'card-child-child',
        data: {
          breadcrumbs: 'Card Child Child'
        },
        loadChildren: () =>
          import('../card-child-child/card-child-child.module').then(
            (m) => m.CardChildChildModule
          ),
      },
      {
        path: 'card-child-child2',
        data: {
          breadcrumbs: 'Card Child Child 2'
        },
        loadChildren: () =>
          import('../card-child-child2/card-child-child2.module').then(
            (m) => m.CardChildChild2Module
          ),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardChildRoutingModule {}
