import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardChild2ChildComponent } from './card-child2-child.component';

const routes: Routes = [
  {
    path: '',
    component: CardChild2ChildComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardChild2ChildRoutingModule {}
