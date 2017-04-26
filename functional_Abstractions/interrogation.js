function myOwnEvery(array, func) {
  for (var i = 0; i < array.length; i++) {
    if (!func(array[i])) {
      return false;
    }
  }

  return true;
}

var isAString = function(value) {
  return typeof value === 'string';
};

console.log(myOwnEvery(['a', 'a234', '1abc'], isAString));

function areAllNumbers(array) {
  return myOwnEvery(array, isANumber);
}

var isANumber = function(value) {
  return typeof value === 'number';
};

console.log(areAllNumbers([1, 5, 6, 7, '1']));             // false
console.log(areAllNumbers([1, 5, 6, 7, 1]));               // true