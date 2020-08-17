import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardChildChild2Component } from './card-child-child2.component';

const routes: Routes = [
  {
    path: '',
    component: CardChildChild2Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardChildChild2RoutingModule {}
