const array = require("../index")

// 10. Сделать функцию которая сможет делать срез данных с ассоциативного массива.
const arrayPlunk = (arr,path) => {
  let pathArr = path.split('.')
  arr.forEach(element => {
    const result = pathArr.reduce((accum,curr) => accum[curr],element)
    console.log(result);
  });
}
arrayPlunk (array.testData3,'skills.js')
