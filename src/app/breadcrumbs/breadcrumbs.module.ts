import { NgModule } from '@angular/core';
import { BreadcrumbsComponent } from './breadcrumbs.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";


@NgModule({
  declarations: [
    BreadcrumbsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [],
})
export class BreadcrumbsModule {}
