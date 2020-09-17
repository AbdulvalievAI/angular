import { Injectable } from '@angular/core';
import {IDataDate, typesDate} from './IDataDate';
import {IBoundaries, IBoundary, IBoundaryMonth} from './IBoundaries';

@Injectable({
  providedIn: 'root'
})
export class UiKitSliderService {

  constructor() { }

  private static getBoundariesMonth(dataDate: IDataDate, boundaryValue: IBoundary['value'], typeDate: typeof typesDate[number]): IBoundary['month'] {
    const month = dataDate.date.getMonth();
    let countRemainingMonths = 0;
    const result = [];

    for (let value = month + 1; value <= 12; value += 1) {
      if (!dataDate.excludedMonths.includes(value)) { countRemainingMonths += 1; }
    }
    const monthlyPart = dataDate.value / countRemainingMonths;

    let lastMonthValue = null;
    const isLast = typeDate === 'last';
    const maxValueMonth = isLast ? month : 11;
    for (let value = isLast ? 0 : month; value <= maxValueMonth; value += 1) {
      if (!dataDate.excludedMonths.includes(value)) {
        if (lastMonthValue === null) {
          const boundaryFirst: IBoundaryMonth = {
            monthNum: value,
            value: boundaryValue - dataDate.value
          };
          result.push(boundaryFirst);
          lastMonthValue = boundaryFirst.value;
        } else {
          const boundary: IBoundaryMonth = {
            monthNum: value,
            value: lastMonthValue + monthlyPart
          };
          result.push(boundary);
          lastMonthValue = boundary.value;
        }
      }
    }

    return result;
  }

  public getBoundariesYears(dataDates: Array<IDataDate>): IBoundaries {
    const result = {};
    dataDates.forEach((dataDate, index) => {
      if (dataDate.type !== 'value') { return; }
      const year = dataDate.date.getFullYear();
      const value = index === 0 ? dataDate.value : result[dataDates[index - 1].date.getFullYear()].value + dataDate.value;
      const month = UiKitSliderService.getBoundariesMonth(dataDate, value, dataDate.typeDate);
      result[year] = {
        value,
        month
      };
    });
    return result;
  }

  public getActiveYear(boundariesYears: IBoundaries, data: Array<IDataDate>, value: number): number {
    for (const dataDate of data) {
      if (dataDate.type !== 'value') { continue; }
      const year = dataDate.date.getFullYear();
      if (boundariesYears[year].value >= value) {
        return year;
      }
    }
  }

  public getActiveMonth(year: number, boundariesYears: IBoundaries, value: number): number {
    let result;
    for (const boundary of boundariesYears[year].month) {
      if (value >= boundary.value) {
        result = boundary.monthNum;
      } else { break; }
    }
    return result;
  }
}
