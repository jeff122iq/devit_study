const array = require("../index")

// 5. Сделать функцию для проверки существования значения в не нормализированном списке данных.

const arraySearch = (value, search) => { // принимает 2 параметра: значение и поиск
  let cut = search.split('/') // отрезает / для регулярного выражения
  let reg =  new RegExp(cut[1], cut[2]) // создвем регулярное выражение с уже вырезанными слешами
  let result = value.filter(item => item.toString().match(reg) ) // заходим в value и делаем фильтр, что бы найти value через item.
  // После приводим к строке и по строке ищем регулярное выражение
  return (result.length) ? true : false // возвращаем результат
}
let result = arraySearch(array.testData4, '/^raf.*/i') // true
let result2 = arraySearch(array.testData4, '/^azaza.*/i') // false
console.log(result)
console.log(result2)


