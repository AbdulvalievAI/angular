import { NgModule } from '@angular/core';
import { CardComponent } from './card.component';
import { CardRoutingModule } from './card.routing.module';
import { CardChildModule } from '../card-child/card-child.module';
import { CardChild2Module } from '../card-child2/card-child2.module';

@NgModule({
  declarations: [
    CardComponent,
  ],
  imports: [
    CardRoutingModule,
    CardChildModule,
    CardChild2Module,
  ],
  providers: [],
  bootstrap: [],
})
export class CardModule {}
