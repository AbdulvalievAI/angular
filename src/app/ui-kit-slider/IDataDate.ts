export interface IDataDate {
  type: 'value' | 'label',
  date: Date,
  value?: number,
  excludedMonths?: Array<number>,
  typeDate?: typeof typesDate[number]
}

export const typesDate = ['start', 'middle', 'last'];
/*
export interface IData {
  titles: Array<number>;
  years: Array<number>;
  boundaries: Array<number>
}
*/
