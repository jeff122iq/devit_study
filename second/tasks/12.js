// 12.  сделать функцию которая создает массив указанной длинны и заполняет его переданными значениями.

const createArr = (length, value) => { //принимает 2 параметра: длинна и значение
  let arr = [] // объявляем массив
  for(let i = 0; i < length; i++) { // создаем цикл, в котором на каждую итерацию делать push нашего value пока i < length(6)
    arr.push(value) // пушим наши value
  }
  console.log(arr) // выводим наш массив
}
createArr(6, 20)
