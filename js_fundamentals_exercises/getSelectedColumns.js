function getSelectedColumns(numbers, cols) {
  var result = [];

  for(var i = 0; i < cols.length; i += 1) {
    if(!result[i]) {
      result[i] = [];
    }
    
    for(j = 0; numbers.length; j += 1) {
      result[i][j] = numbers[j][i];
    }
  }

  return result;
}

// Given array of number arrays
var array1 = [[1, 2, 3], [4, 5 ,6], [7, 8 ,9]];
var array2 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

// array1 in row/column format
// [[1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]]

console.log(getSelectedColumns(array1, [0]));     // [[1]]; expected [[1, 4, 7]]
getSelectedColumns(array1, [0, 2]);  // [[1, 4], [3, 6]]; expected [[1, 4, 7], [3, 6, 9]]
getSelectedColumns(array2, [1, 2]);  // [[2, 2], [3, 4]]; expected [[2, 2, 2], [3, 3, 3]]