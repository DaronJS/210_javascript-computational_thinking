// Write a function that takes any two version numbers in this format and compare
// If v1 > v2 return 1
// if v1 < v2 return -1
// if v1 === v2 return 0
// if either version contains chars other than numbers and decimal points return null;
// compare versions
  // - each section of version is compared in order, the lower the index the higher the value of the comparison
  // - compare the first section if they are not the same then your comparison can stop here and you can determine which version is greater
  //   - if the sections values are equal then move to the next sub section and compare those values,
  //   - if all the values are the same then they are equal

// test / edge
// negative numbers? 
console.log(compareVersions('1', '1'));          // 0
console.log(compareVersions('1.1', '1.0'));      // 1
console.log(compareVersions('2.3.4', '2.3.5'));  // -1
console.log(compareVersions('1.a', '1'));        // null
console.log(compareVersions('.1', '1'));         // null
console.log(compareVersions('1.', '2'));         // null
console.log(compareVersions('1..0', '2.0'));     // null
console.log(compareVersions('1.0', '1.0.0'));    // 0
console.log(compareVersions('1.0.0', '1.1'));    // -1
console.log(compareVersions('1.0', '1.0.5'));    // -1

//data structures: array - the version number can be split on the decimals and each index of the array can be compared in order

// algorithm:
// - convert version into string
// - split string into array of number strings
// - iterate through array comparing the index of each array as numbers
//  if the index element of one of the arrays is undefined then element = 0;
//   - if any element is not equal 
//     return 1 if v1 element > v2 element 
//     else return -1 if v1 element < v2 element 
//     else move to the next indexed element in the arrays because those two elements are equal;
// if all elements in the arrays have been compared then both versions are equal   



function compareVersions(v1, v2) {
  var v1Array, v2Array, i, length, element1, element2;
  var valid = /^(\d+)(\.\d+)*$/;
  if (!valid.test(v1) || !valid.test(v2)) {
    return null;
  }

  v1Array = v1.split('.');
  v2Array = v2.split('.');
  length = Math.max(v1Array.length, v2Array.length);
  for(i = 0; i < length; i += 1) {
    element1 = Number(v1Array[i]) || 0;
    element2 = Number(v2Array[i]) || 0;

    if (element1 !== element2) {
      if (element1 > element2) {
        return 1;
      }else {
        return -1;
      }
    }
  }

  return 0;
}
