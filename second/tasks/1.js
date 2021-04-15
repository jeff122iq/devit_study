const array = require("../index")

// 1. Сделать функцию поиска значений в массиве.
const searchArray = (array, value) => {
  console.log(value)
  return array.filter(item => item.toString().match(value))
}

let result = searchArray(searchArray(array.testData, "/^raf.*/i"))
let result1 = searchArray(searchArray(array.testData, "Rafshan"))

console.log(result)
console.log(result1)

