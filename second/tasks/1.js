const array = require("../index")

// 1. Сделать функцию поиска значений в массиве.
const searchArray = (array, value) => {
  let newArr = array.filter(item => item.toString().match(new RegExp(value.replace(/[\/i]/g,''), "i")))
  return newArr
}
let result = searchArray(array.testData, "/^raf.*/i")
let result1 = searchArray(array.testData, "Rafshan")
console.log(result)
console.log(result1)

