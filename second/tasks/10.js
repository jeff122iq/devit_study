const array = require("../index")

// 10. Сделать функцию которая сможет делать срез данных с ассоциативного массива.

const arrayPlunk = (arr,path) => { //принимает 2 параметра: массив и путь
  let pathArr = path.split('.') // мы разделяем для того что бы в массиве было 2 значения
  arr.forEach(element => {
    const result = pathArr.reduce((accum,curr) => accum[curr],element) // разбираем путь с помощью reduce и ищем путь ел-та
    console.log(result)
  });
}
arrayPlunk (array.testData3,'skills.php')
