import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayChildComponent } from './pay-child.component';

const routes: Routes = [
  {
    path: '',
    component: PayChildComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayChildRoutingModule {}
