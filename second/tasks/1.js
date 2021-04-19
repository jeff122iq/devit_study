const array = require("../index")

// 1. Сделать функцию поиска значений в массиве.
const searchArray = (array, value) => { // принимает 2 парметра: массив и значение
  let newArr = array.filter(item => item.toString().match(new RegExp(value.replace(/[\/i]/g,''), 'i'))) // фильтруем массив что бы найти значение.
  const str1 = RegExp(value.slice(2));
  console.log(str1)
  // После приводим к строке принимаем регулярное выражение, которое включает в себя (/[\/i]/g, "")
  return newArr // возвращаем результат
}
let result = searchArray(array.testData, "/^raf\/.*/i")
let result1 = searchArray(array.testData, "Rafshan")
console.log(result)
console.log(result1)

