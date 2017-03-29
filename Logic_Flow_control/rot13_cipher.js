// Rot13 cipher; a letter substitution cipher that translates a String into a new String;
function rot13(string) {
  var outputStr = '';
  var asciiNum;
  var ROTATE_VAL = 13;
  for (var i = 0; i < string.length; i++) {
    asciiNum = string.charCodeAt(i);
    if ((asciiNum >= 65 && asciiNum <= 77) || (asciiNum >= 97 && asciiNum <= 109)) {
      outputStr += String.fromCharCode(asciiNum + ROTATE_VAL);
    } else if ((asciiNum >= 78 && asciiNum <= 90) || (asciiNum >= 110 && asciiNum <= 122)){
        outputStr += String.fromCharCode(asciiNum - ROTATE_VAL);
    } else {
        outputStr += string[i];
    }
  }

  return outputStr;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.
