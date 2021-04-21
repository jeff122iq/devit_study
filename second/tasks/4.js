const array = require("../index")

// 4. Сделать функцию которая обрезает массив до указанного значения.

const cutArray = (value, arr) => {
  let newArr; // создаем переменную newArr
  // for(let i = 0; i <= arr.length; i++) { // на каждую итерацию цикла мы проверяем если i <= длинне массива
    newArr = arr.slice(arr.indexOf(value),arr.length) // с помощью метода slice мы удаляем все елементы до найденного indexOfOM value и до длинны введенного массива
  // }
  return newArr // выводи результат обрезанного массива
}
console.log(cutArray(85, array.testData))

