
function substring(string, start, end) {
  var outputStr = ''
  var end = end || string.length; // if end is undefined (an arg is not given) then end is the length of the string;
  start = (start < 0 || isNaN(start)) ? 0 : start; // if `start` or `end` are not a number or less than zero then the are assigend `0`value;
  end = (end < 0 || isNaN(end)) ? 0 : end;

  if (start > end) { // if start is greater than end then swap the two;
    var temp = start;
    start = end;
    end = temp;
  }

  for (var i = start; i < end; i++) {
    if (i >= string.length) { // stop the iteration if the index is beyond the length of the string;
      break;
    }

    outputStr += string[i]
  }

  return outputStr;
}

var string = 'hello world';

substring(string, 2, 4);    // "ll"
substring(string, 4, 2);    // "ll"
substring(string, 0, -1);   // ""
substring(string, 2);       // "llo world"
substring(string, 'a');     // "hello world"
substring(string, 8, 20);   // "rld"