// Завдання 1. Є три мависи з рівнем продажів менеджерів. Знайти найменше значення.
const arr1 = [2200, 34000, 1200];
const arr2 = [120000, 34000, 7000];
const arr3 = [1100, 56000, 2700];

const generalArr = arr1.concat(arr2.concat(arr3));
console.log(generalArr);
let minValue = generalArr[0];

for (const number of generalArr) {
  if (number < minValue) {
    minValue = number;
  }
}
console.log(minValue);
