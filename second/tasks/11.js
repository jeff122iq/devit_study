const array = require("../index")

const arrayUnique = (arr) => { // принимает массив
  let unique = []; // создаем новый массив
  for(let value of arr) { // через цикл for...of перебираем value по нашему arr
    if(!unique.includes(value)) { // делаем проверку: если значение уникальное
      unique.push(value)
    }
  }
  return unique; // вернем массив unique
}
console.log(arrayUnique(array.testData.concat(array.testData2)))
