// Exercise 1
function push(arr, value) {
  arr[arr.length] = value;
  return arr.length;;
}

// Exercise 2

function pop(arr) {
  var value = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return value;
}

// Exercise 3;

function unshift(arr, val) {
  for (var i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = val;
  return arr.length;
}

// Exercise 4;

function shift(arr) {
  var element = arr[0];
  for (var i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr.length = arr.length - 1;
  return element;
}

// Operations: indexOf and lastIndexOf
// ======================================

// Exercise: 1

function indexOf(arr, element) {
  for (var i = 0; i <= arr.length; i++) {
    if (arr[i] === element) {
      return i;
    }
   }
   return -1;
}

// Exercise: 2

function lastIndexOf(arr, element) {
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === element) {
      return i;
    }
  }

  return -1;
}

// Array Operations: slice, splice, concat, join
// ==============================================

function slice(arr, start, end) {
  var newArr = [];
  for (var i = start; i < end; i++) {
    push(newArr, arr[i]);
  }

  return newArr;
}

function splice(array, begin, number) {
  var removedValues = [];
  for (var i = begin; i < array.length; i++) {
    if (i < begin + number) {
      push(removedValues, array[i]);
    }

    array[i] = array[i + number];
  }

  array.length = array.length - number;
  return removedValues;
}

function concat(firstArray, secondArray) {
  var newArray = [];

  for (var i = 0; i < firstArray.length; i++) {
    push(newArray, firstArray[i]);
  }

  for (var i = 0; i < secondArray.length; i++) {
    push(newArray, secondArray[i]);
  }

  return newArray;
}

function join(array, separator) {
  var string = ''
  for (var i = 0; i < array.length; i++) {
    string += String(array[i]);
    if (!!array[i + 1]) {
      string += separator;
    }
  }
  return string;
}


// Comparing Arrays
//=====================


function arraysEqual(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }

  for (var i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }

  return true;
}
