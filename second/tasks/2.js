const array = require("../index")

// 2. Сделать функцию подсчета среднего значения, с возможностью исключения не числовых значений

const arrReducer = (arr, skipNaN) => {
  let result = arr.reduce((accum, curr) => {
    if (typeof curr !== "number" || skipNaN && Number.isNaN(curr)) {
      return accum
    }
    return accum + curr
  }, 0)
  const onlyNum = skipNaN ? arr.filter(item => typeof item === "number").length : arr.length
  console.log(Math.round(result / onlyNum))
}
arrReducer(array.testData)
arrReducer(array.testData2)
arrReducer(array.testData, true)


