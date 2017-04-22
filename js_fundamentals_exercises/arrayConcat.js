// implement an `array.prototype.concat function
// // input: 
//   - two arguments
//     - first is an array
//     - second could be an array or any data type
// output: 
    // a new array containing all the elements from the first array as well as any elements from the second argument.

// logic: 
//   - iterate through the first argument array adding each element to the output array
//   - check if the second argument is an array, if it is repeat step one and return the output array.
//   - if it isnt then just copy the element and append to the output array

function addElements(array, newArray) {
  var i;
  for (i = 0; i < array.length; i += 1) {
    newArray.push(array[i]);
  }
}


function concat() {
  var output = [];
  var counter = 1;
  addElements(arguments[0], output); // build the output array with the first argument array;

  do {
    if (Array.isArray(arguments[counter])) {
      addElements(arguments[counter], output);
    } else {
      output.push(arguments[counter]);
    }
    counter += 1;
  }while(counter < arguments.length);

  return output;
}

console.log(concat([1, 2 ,3], [4, 5, 6], [7, 8, 9]));           // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(concat([1, 2], "a", ["one", "two"]));               // [ 1, 2, "a", "one", "two" ]
console.log(concat([1, 2], ["three"], 4));                      // [ 1, 2, "three", 4 ]