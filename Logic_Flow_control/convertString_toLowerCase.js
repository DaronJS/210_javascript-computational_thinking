function toLowerCase(string) {
  outputStr = ''
  for(var i = 0; i < string.length; i++) {
    asciiNumeric = string.charCodeAt(i);
    if (asciiNumeric > 64 && asciiNumeric < 91) {
      asciiNumeric += 32;
      outputStr += String.fromCharCode(asciiNumeric); 
    }else {
      outputStr += string[i];
    }
  }

  return outputStr;
}

toLowerCase('ALPHABET');      // "alphabet"
toLowerCase('123');           // "123"
toLowerCase('abcDEF');        // "abcdef"