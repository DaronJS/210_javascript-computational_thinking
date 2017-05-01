function isBalanced(string) {
  var tally = 0;
  var char;
  for(var i = 0; i < string.length; i += 1) {
    char = string[i];
    if (char === '(') {
      tally += 1;
    }else if (char === ')') {
      tally -= 1;
    }

    if (tally < 0) {
      return false;
    }
  }

  return tally === 0;
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false