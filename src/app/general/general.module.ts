import { NgModule } from '@angular/core';
import { GeneralComponent } from './general.component';
import { RouterModule } from "@angular/router";
import { BreadcrumbsComponent } from '../breadcrumbs/breadcrumbs.component';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    GeneralComponent,
    BreadcrumbsComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [],
})
export class GeneralModule {}
