// Write a function that takes a sorted array of integers as an argument, and returns an array that includes all 
// the missing integers (in order) between the first and last elements of the argument.

// input: a sorted array - integers

// output: a new array with any gaps between the original integers filled in with the correct numbers.

// edge: return an empty array if the input array lenght is < 2;

// logic: 
// iterate through the input array starting with the first index
// start an inner loop and count from index + 1, while count < the next element of the input array
 // push the count to output array; return output array.

function missing(array) {
  var missingElements = [];
  for (var i = 0; i < array.length; i++) {
    for (var j = array[i] + 1; j < array[i + 1]; j++) {
      missingElements.push(j);
    }
  }

  return missingElements;
}


console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []