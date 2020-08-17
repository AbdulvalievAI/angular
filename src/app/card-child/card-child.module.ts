import { NgModule } from '@angular/core';
import { CardChildComponent } from './card-child.component';
import { CardChildRoutingModule } from './card-child.routing.module';


@NgModule({
  declarations: [
    CardChildComponent
  ],
  imports: [
    CardChildRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class CardChildModule {}
