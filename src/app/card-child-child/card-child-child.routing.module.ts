import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardChildChildComponent } from './card-child-child.component';

const routes: Routes = [
  {
    path: '',
    component: CardChildChildComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardChildChildRoutingModule {}
