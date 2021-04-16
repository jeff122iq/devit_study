const array = require("../index")

// const arrayCombine = (keys,values) => {
//   let obj = {};
//   keys.forEach((element, i) => {
//     let secondsArgs = values[i];
//     Object.defineProperty(obj, element, {
//       value: secondsArgs
//     })
//   });
//   return obj;
// }
// arrayCombine(array.testData, array.testData2)

const arrayCombine = (key, value) => {
  let obj = new Map()
  obj[key][value]
  return console.log(obj)
}
arrayCombine(array.testData, array.testData2)
