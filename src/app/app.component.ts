import { Component } from '@angular/core';
import { IDataDate } from './ui-kit-slider/IDataDate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  public amountValue = 0;
  public amountMin = 0;
  public amountMax = 3000;
  public dataDatesSlider: Array<IDataDate> = [
    {
      type: 'value',
      date: new Date(2019, 8, 1),
      value: 1000,
      excludedMonths: [5, 6, 7],
      typeDate: 'start',
    },
    {
      type: 'value',
      date: new Date(2020, 0, 1),
      value: 1000,
      excludedMonths: [5, 6, 7],
      typeDate: 'middle',
    },
    {
      type: 'value',
      date: new Date(2021, 5, 0),
      value: 1000,
      excludedMonths: [5, 6, 7],
      typeDate: 'last',
    },
    {
      type: 'label',
      date: new Date(2022, 0, 1)
    }
  ];
}
