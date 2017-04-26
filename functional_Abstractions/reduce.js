function myReduce(array, func, initial) {
  var result = initial || array[0];
  for (var i = 0; i < array.length; i += 1) {
    result = func(result, array[i]);
  }

  return result;
}

var smallest = function(result, value) {
  return result <= value ? result : value;
};

var sum = function(result, value) {
  return result + value;
};

console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49

var longest = function(result, currentWord) {
  return currentWord.length > result.length ? currentWord : result;
}

function longestWord(array) {
  return myReduce(array, longest);
}

console.log(longestWord(['abc', 'launch', 'targets', '']));