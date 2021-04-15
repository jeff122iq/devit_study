const array = require("../index")

const cutArray = (value, arr) => {
  let newArr; // создаем переменную newArr
  for(let i = 0; i <= arr.length; i++) { // на каждую итерацию цикла мы проверяем если i <= длинне массива
    newArr = arr.slice(arr.indexOf(value),arr.length) // с помощью метода slice мы удаляем
  }
  console.log(newArr)
}

console.log(cutArray("Rafshan", array.testData))

