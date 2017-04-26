// function myForEach(array, func) {
//   for(var i = 0; i < array.length; i++) {
//     func(array[i]);
//   }
// }

// var min = Infinity;
// var getMin = function(value) {
//   min = value <= min ? value : min;
// };

// myForEach([4, 5, 12, 23, 3], getMin);     // undefined
// console.log(min);                         // 3

var min = Infinity;
var max = -Infinity;

var getMinMax = function(value) {
  if (value > max) {
    max = value;
  }

  if (value < min) {
    min = value;
  }
};

[4, 5, 12, 23, 3].forEach(getMinMax);

console.log(min, max);         // 3 23
