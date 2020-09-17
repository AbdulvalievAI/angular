export interface IBoundaries {
  [key: number]: IBoundary
}
export interface IBoundary {
    value: number,
    month: Array<IBoundaryMonth>
}
export interface IBoundaryMonth {
  monthNum: number;
  value: number;
}
