// Write a function that takes a string as an argument,
// and returns the string stripped of spaces from both ends. Do not remove or alter internal spaces

// input = string containing whitespaces;
// output = string with starting and trailing whitespaces removed but the 'inner' whitespaces left intact;

// logic: 
// check if no non-whitespace chars have occurred yet, if true, delete it if its a whitespace char.
// once a non-whitespace char has occurred, do not remove whitespace char if there are any more non_whitspace chars left in
// the string. Once there are no more non-whitespace chars left in the str, remove any whitespace char.

function hasOnlyWhiteSpaceLeft(index, str) {
  whiteSpaceOnly = true;
  for (var i = index; i < str.length; i++) {
    if(str[i] !== ' ') {
      whiteSpaceOnly = false;
      break;
    } 
  }
  return whiteSpaceOnly;
}


function trim(str) {
  var delete_whitespace = true;
  var trimmed_copy = ''
  for (var i = 0; i < str.length; i++) {
    if (delete_whitespace && str[i] == ' ') {
      continue;
    }else {
      trimmed_copy += str[i];
      delete_whitespace = false;
    }

    if (hasOnlyWhiteSpaceLeft(i + 1, str)) {
      console.log(trimmed_copy);
      break;
    }
  }
}

trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""