// Завдання 2. Маємо два масиви. В першому прізвища менеджерів, в другому суми їх продажів
// Виведи в консоль менеджерів та їх продажі. Приклад: Petro-20000

const managers = ["Petro", "Viktor", "Anna", "Olga"];
const sales = [20000, 34000, 17000, 23000];
const managersNew = managers.concat(sales);
console.log(managersNew);
for (let i = 0; i < managersNew.length - 4; i += 1) {
  console.log(`${managersNew[i]}-${managersNew[i + 4]}`);
}
