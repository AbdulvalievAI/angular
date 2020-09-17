





const dataDate ={
  type: 'value',
  date: new Date(2020, 0, 1),
  value: 1000,
  excludedMonths: [5, 6, 7],
}
let countRemainingMonths = 0;

for (let months = 12; months <= 12; months++) {
  if(!dataDate.excludedMonths.includes(months)) countRemainingMonths += 1;
}
console.log(countRemainingMonths)
