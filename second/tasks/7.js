const array = require("../index")

const arraySearch = (arr, search, path) => {
  let result = []
  function filterArr(data) {
    data = arr.filter(item => item.toString().match(new RegExp(search.slice(1, 6), 'i')))
    result.push(data)
    if (Object) {

    }
    if (Array.isArray(data)) {
      filterArr(data)
    }
  }
  filterArr(arr)
  return result
}
console.log(arraySearch(array.testData4, '/^raf.*/i'))
