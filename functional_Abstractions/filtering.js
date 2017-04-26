// var count = [1, 2, 3, 4, 5];
// var filtered = count.filter(function(number, index, array) { return number % 2 === 0; });

// console.log(filtered);

function myFilter(array, func) {
  var output = [];
  var element;
  for (var i = 0; i < array.length; i += 1) {
    element = array[i];
    if (func(element)) {
      output.push(array[i])
    }
  }

  return output;
}

// var isPythagoreanTriple = function(triple) {
//   return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
// };

// console.log(myFilter([{a: 3, b: 4, c: 5}, {a: 5, b: 12, c: 13},
//           {a: 1, b: 2, c: 3}], isPythagoreanTriple));
// // returns [{a: 3, b: 4, c: 5}, {a: 5, b: 12, c: 13}]


function multiplesOfThreeOrFive(values) {
  var isMultipleOfThreeOrFive = function(value) {
  return value % 5 === 0 || value % 3 === 0;
  };

  return myFilter(values, isMultipleOfThreeOrFive);
}

console.log(multiplesOfThreeOrFive([1, 3, 5, 7, 11, 18, 16, 15]));

