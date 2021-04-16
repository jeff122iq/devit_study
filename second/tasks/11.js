const array = require("../index")

const array_unique = (arr) => {
  let unique = [];
  for(let value of arr) {
    if(!unique.includes(value)) {
      unique.push(value)
    }
  }
  console.log(unique);
}
array_unique(array.testData.concat(array.testData2))
