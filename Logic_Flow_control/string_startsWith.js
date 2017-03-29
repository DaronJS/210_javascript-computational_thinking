// Implement a function that determines whether a string begins with another string. 
// If it does, the function should return true, false otherwise.

function startsWith(string, searchStr) {
  for (var i = 0; i < limit; i++) {
    if (string[i] !== searchStr[i]) {
      return false;
    }
  }
  return true;
}

var str = 'We put comprehension and mastery above all else';
startsWith(str, 'We');       // true
startsWith(str, 'We put');   // true
startsWith(str, '');         // true
startsWith(str, 'put');      // false

var longerString = 'We put comprehension and mastery above all else!';
startsWith(str, longerString);      // false