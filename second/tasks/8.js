const array = require("../index")

// 8. Создать функцию которая создает объект на основании двух представленных массивов

const arrayCombine = (key, value) => { // принимет 2 парметра: ключ и значенине
  const freshArray = key.length ? key.map((item, i) => {
    // делаем проверку на длинну массива, проходимся по каждому ел-ту и возвр. массив состоящий из этого ел-та,
    // а второй ел-нт это значение по индексу во втором массиве
    return [item, value[i]]
  }) : value.map((item, i) => {
    return [item, key[i]]
  })
  let obj = Object.fromEntries(freshArray) // преобразует список пар ключ-значение в объект.
  console.log(obj) // выводи наш объект
}
let result = arrayCombine(array.testData, array.testData2)
console.log(result)


