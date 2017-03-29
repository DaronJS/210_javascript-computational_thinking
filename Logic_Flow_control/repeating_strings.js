// input: string, times;
// output: returns the string repeated (times) number of times. 

// edge: if times is NaN or negative - return undefined
//       if times is 0 - return empty string;

function repeat(str, times) {
  var output = '';

  if (isNaN(times) || times < 0) {
    return undefined;
  }

  for (var i = 0; i < times; i++) {
    output += str;
  }
  
  return output;
}

repeat('abc', 1);    // "abc"
repeat('abc', 2);    // "abcabc"
repeat('abc', -1);   // undefined
repeat('abc', 0);    // ""
repeat('abc', 'a');  // undefined