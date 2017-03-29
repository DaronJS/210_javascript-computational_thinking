// Rot13 cipher; a letter substitution cipher that translates a String into a new String;
function rot13(string) {
  var outputStr = '';
  var asciiNum;
  for (var i = 0; i < string.length; i++) {
    asciiNum = string.charCodeAt(i);
    if ((asciiNum >= 65 && asciiNum <= 77) || (asciiNum >= 97 && asciiNum <= 109)) {
      outputStr += String.fromCharCode(asciiNum + 13);
    } else if ((asciiNum >= 78 && asciiNum <= 90) || (asciiNum >= 110 && asciiNum <= 122)){
        outputStr += String.fromCharCode(asciiNum - 13);
    } else 
        outputStr += string[i];
    }

  return outputStr;
}