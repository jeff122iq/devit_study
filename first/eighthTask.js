const array = [[1, 2, 3], [4, 5], [6]]
console.log(array)
const newArray = array.reduce(function(done,curr){
  return done.concat(curr);
}, []);
console.log(newArray)

