const Equation = require("./equation.js");
/*Пимер использования*/

const newF = new Equation(-1, 2, 8); // -x^2 + 2x + 8 = 0;
console.log(newF.getDisc()); // Вывод в консоль значение Дискриминанта
console.log(newF.rootSearch()); // Вывод в консоль результат решения