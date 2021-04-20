const array = require("../index")

// 1. Сделать функцию поиска значений в массиве.
const searchArray = (array, value) => { // принимает 2 парметра: массив и значение
  return array.filter(item => item.toString().match(new RegExp(value.slice(1, 6), 'i')))
  // фильтруем массив что бы найти значение и если это регулярное выражение, то убираем лишние слеши и возвращаем результат.
}
let result = searchArray(array.testData, "/^raf.*/i")
let result1 = searchArray(array.testData, "Rafshan")
console.log(result)
console.log(result1)

