const array = require("../index")

const arraySearch = (arr, search, path) => {
  const a = arr.filter(item => item.toString().match(new RegExp(search.slice(1, 6), 'i')))
}
console.log(arraySearch(array.testData4, '/^raf.*/i'))
