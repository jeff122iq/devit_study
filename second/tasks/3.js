const array = require("../index")

// 3. Сделать функцию которая разбивает массив на подмассивы указанной длинны

const subArray = (size, currentArr) => { // создаем функцию которая принимает 2 параметра: размер и текущий массив
  let arr = []; // сюда ложатся подмассивы
  for (let i = 0; i <Math.ceil(currentArr.length/size); i++){ // тут на каждую итерацию мы делим длинну заданного массива на значение,
    // которое мы указали в нашей функции
    arr[i] = currentArr.slice((i*size), (i*size) + size); // с помощью метода slice мы разбиваем наши еле-ты на подмассивы
  }
  return arr // возвращает результат
}
console.log(subArray(10, array.testData))
