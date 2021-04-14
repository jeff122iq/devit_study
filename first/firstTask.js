(function numRange (from,to) {
  let random = Math.floor(Math.random() * to) + from;
  console.log(random % 2 == 0 ? `Number ${random} with the remainder` : `Number ${random} without a remainder`)
})(51,10)
