// Write a function that returns a substring of a string based on a starting index and length;

function substr(string, start, length) {
  var substring = '';
  start = start < 0 ? string.length + (start) : start;
  for (var i = start; i < (start + length); i++) {
    if (!!string[i]) {
      substring += string[i];
    }else {
      break;
    }
  }

  return substring;
}

var string = 'hello world';

substr(string, 2, 4);     // "llo "
substr(string, -3, 2);    // "rl"
substr(string, 8, 20);    // "rld"
substr(string, 0, -20);   // ""
substr(string, 0, 0);     // ""