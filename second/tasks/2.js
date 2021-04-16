const array = require("../index")

// 2. Сделать функцию подсчета среднего значения, с возможностью исключения не числовых значений
// const arrReducer = (arr) => {
//   return arr.reduce((a, b) => {
//   })
// }
// console.log(arrReducer(array.testData))

const arrReducer = (arr,skipNaN) => {
    if(skipNaN) {
      arr.forEach((a, b) => {
        return (typeof a !== "number") ? arr = arr.slice(0, b) : ""
      });
    }
   arr.forEach((a, b) => {
     if(typeof a !== "number") {
       let strList = Number(a = null)
       arr = arr.slice(0, b);
       arr.push(strList)
     }
   });
    let result = arr.reduce((accum, curr ) => {
      return accum + curr
    })
  console.log(Math.round(result / arr.length))
}
arrReducer(array.testData)
arrReducer(array.testData2)
arrReducer(array.testData, true)


