import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardChild2Child2Component } from './card-child2-child2.component';

const routes: Routes = [
  {
    path: '',
    component: CardChild2Child2Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardChild2Child2RoutingModule {}
