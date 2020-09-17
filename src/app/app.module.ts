import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { UiKitSliderModule } from 'src/app/ui-kit-slider/ui-kit-slider.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    UiKitSliderModule,
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
