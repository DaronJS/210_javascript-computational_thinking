function reverse(input) {
  var output;
  var idx = 0;
  isArray = Array.isArray(input)
  if (isArray) {
    output = [];
    for (var i = input.length - 1; i >= 0; i -= 1) {
      output[idx] = input[i];
      idx += 1;
    }
  }else {
    output = '';
    for (var i = input.length - 1; i >= 0; i -= 1) {
      output += input[i];
      idx += 1;
    }
  }

  return output;
}

console.log(reverse('Hello'));          // olleH
console.log(reverse('a'));              // a
console.log(reverse([1, 2, 3, 4]));     // [4, 3, 2, 1]
console.log(reverse([]));               // []