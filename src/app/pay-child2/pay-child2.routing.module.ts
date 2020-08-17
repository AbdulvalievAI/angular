import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayChild2Component } from './pay-child2.component';

const routes: Routes = [
  {
    path: '',
    component: PayChild2Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayChild2RoutingModule {}
