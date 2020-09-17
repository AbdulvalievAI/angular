import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatCommonModule} from '@angular/material/core';
import { UiKitSliderComponent } from './ui-kit-slider.component';


@NgModule({
  imports: [CommonModule, MatCommonModule],
  exports: [UiKitSliderComponent, MatCommonModule],
  declarations: [UiKitSliderComponent],
})
export class UiKitSliderModule { }
