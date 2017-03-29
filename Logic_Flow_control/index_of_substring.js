//The indexOf() function searches for the first instance of a substring in firstString that matches the string secondString, 
//and returns the index of the character where that substring begins.

function indexOf(firstStr, secondStr) {
  var matchIdx;
  var size = secondStr.length;

  for (var i = 0; i < firstStr.length; i++ ) {
    if (firstStr[i] === secondStr[0]) {
      matchIdx = i
      for (var count = 0; count < size; count++) {
        if (firstStr[(i + count)] !== secondStr[count]) {
          matchIdx = false;
          break;
        }
      }

      if (!!matchIdx) {
        console.log(matchIdx);
        return matchIdx; 
      }
    }
  }

  console.log(-1);
}

indexOf('Some strings', 's');      // 5
indexOf('Blue Whale', 'Whale');    // 5
indexOf('Blue Whale', 'Blute');    // -1
indexOf('Blue Whale', 'leB');      // -1


// The lastIndexOf() function searches for the last instance of a substring in firstString that matches 
// the string secondString, and returns the index of the character where that substring begins.

function lastIndexOf(firstStr, secondStr) {
  var possibleMatch;
  var lastMatch;
  var size = secondStr.length;

  for (var i = 0; i < firstStr.length; i++ ) {
    if (firstStr[i] === secondStr[0]) {
      possibleMatch = i;
      
      for (var count = 0; count < size; count++) {
        if (firstStr[(i + count)] !== secondStr[count]) {
          possibleMatch = false;
          break;
        }
      }

      if (!!possibleMatch) {
        lastMatch = possibleMatch;
      }
    }
  }

  console.log(lastMatch || -1);
}

lastIndexOf('Some strings', 's');                  // 11
lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1
