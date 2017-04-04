// Exercise 1

function oddElementsOf(arr) {
  var odds = [];
  for (var i = 1; i < arr.length; i+=2) {
    odds.push(arr[i]);
  }

  return odds;
}

// Exercise 2

function combinedArray(even, odd) {
  var combination = [];
  for (var i = 0; i < even.length; i++) {
    combination.push(even[i], odd[i]);
  }

  return combination;
}

// Exercise 3

function plusReversed(arr) {
  return arr.concat(arr.slice().reverse());
}

// Exercise 4

function joinArray(array, joiner) {
  joiner = joiner || '';
  var string = '';
  for (var i = 0; i < array.length; i++) {
    string += (array[i].toString() + joiner);
  }

  return string;
}

// Exercise 5
function compare(a, b) {
  return b - a;
}

function sortDescending(arr) {
  return arr.slice().sort(compare);
}

// Exercise 6

function matrixSums(arr) {
  var new_array = [];
  var total;
  for (var i = 0; i < arr.length; i++) {
    total = 0;
    for (var j = 0; j < arr[i].length; j++) {
      total += arr[i][j];
    }

    new_array.push(total);
  }

  return new_array;
}

// Exercise 7

function uniqueElements(arr) {
  var uniqueArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (uniqueArray.indexOf(arr[i]) === -1) {
      uniqueArray.push(arr[i]);
    }
  }

  return uniqueArray;
}