const array = require("../index")

// 2. Сделать функцию подсчета среднего значения, с возможностью исключения не числовых значений

const arrReducer = (arr, skipNaN) => {
  let result = arr.reduce((accum, curr) => {
    if (typeof curr !== "number" || skipNaN && Number.isNaN(curr)) {
      return accum
    }
    return accum + curr
  }, 0)
  const onlyNum = skipNaN ? arr.filter(item => typeof item === "number").length : arr.length // проверка если вдрруг у нас skipNaN
  return Math.round(result / onlyNum)
}
console.log(arrReducer(array.testData))
console.log(arrReducer(array.testData2))
console.log(arrReducer(array.testData, true))


