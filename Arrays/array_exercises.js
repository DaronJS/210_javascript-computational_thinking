// Exercise: 1

function lastInArray(array) {
  return array[array.length - 1];
}


// Exercise: 2

function rollCall(names_arr) {
  for (var i = 0; i < names_arr.length; i++) {
    console.log(names_arr[i]);
  }
}

// Exercise 3

function reverser(array) {
  var new_array = [];
  for (var i = array.length - 1; i >= 0; i--) {
    new_array.push(array[i]);
  }

  return new_array;
}

// Exercise 4

function indexOf(array, element) {
  var index = -1;
  for (var i = 0; i <= array.length; i++) {
    if (array[i] === element) {
      index = i;
      break;
    }
  }
  return index;
}

// Exercise 5

function joinor(array) {
  var string = '';
  for (var i = 0; i <= array.length; i++) {
    string += array[i].toString();
  }

  return string;
}