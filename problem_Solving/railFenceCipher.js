// IMplement a rail fence cipher;

// message is written 'downwards' on successive 'rails' of
// an imaginary fence, then moving up once the once it gets
// to the bottom, moving in zig zag, finally the message is
// read of in rows to be encoded.

//example 'WEAREDISCOVEREDFLEEATONCE' // 3 rows
// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . A . . . I . . . V . . . D . . . E . . . N . .
// // becomes 'WECRLTEERDSOEEFEAOCAIVDEN'

// ENCRYPT
// requirements:
//  - input: string of letters and spaces
//  - output: an encrypted string containing no spaces, encrypted according to the rail cipher rules and # of rails

//  - downwards --> next row === array
//  - zig zag --> start moving from the first row to the second until the last row is reached
//                then reverse the direction and start moving back up

//  - cycle = (rails #) * 2 - 2 // the number of chars before getting back to the starting position
// 
//  - width = total chars / cycle 
//   - a chunk of the string to iterate through 
//   - each char in the first position of a width chunk will be in the first row 
//     each char in the second position of a width chunk will be in the second row
//  - the index of the next char to be placed is always one more than the last

//  data structure:
 // array of arrays // creates a single array with n number of nested arrays, n = number of rails
 // each nested array represents a rail
 // 
// algorithm
// - remove any whitespace from string of chars;
// - split the string into an array of chars;

// - create data structure
//   - a single array that contains n number of arrays;

// - iterate through the array of input chars:
//   - add current char to the current rail
// 
//   - if the current rail === first rail (row index === 0)
//       change direction down (current row index += 1)
//      
//   - else if current rail === last rail (row index === railsNum - 1)
//       change direction up (curren row index -= 1)
// - finally concat all the arrays into a single array and join into a string and return;

function encryptRailCipher(string, railsNum) {
  var charsArray = string.split(' ').join('').split(''); // to remove any space chars;
  var railFence = createRailFence(railsNum);
  var currentRail = 0;
  var descending = false;

  charsArray.forEach (function (char) {
    railFence[currentRail].push(char);
    if (currentRail === 0 || currentRail === railsNum - 1) {
      descending = (descending ? false : true);
    }
    currentRail += (descending ? 1 : -1);
  });

  return railFence.join('').replace(/,/g, '');
}

function createRailFence(num) {
  var fence = [];
  for (var i = 0; i < num; i += 1) {
    fence.push([]);
  }

  return fence;
}

// DECRYPT
// requirements:
// - input: an encrypted string, the number of rails
// - output: a new string that has been decrypted;
// - top rail contains width number of chars, add one if there are leftover chars in a partial cycle
// - middle rows contain width * 2 number of chars, plus one if there are leftover chars
// - final row contains exactly width number of chars

// - cycle: number of chars in a section === railsNum * 2 - 2;
// - width = string length / cycle;

// data structure:
// array of arrays = sections of cycles
// string for final output;

// algorithm:
// - build new empty fence with n number of rails;
// - transform the string into an array of chars;
//  - add the first w(width) number of chars from the string to the first rail

//  - when the correct number of chars has been added to the rail 
//      (rail 1 = width (+1 if leftovers), middle rails = width * 2 (+ 1 if leftovers), bottom rail = width)

//    - check if there are any leftover partial cycle chars that should be added
//    - if so add another one to the rail, subtract it from the number of leftover chars
//    - increment the focus to the next rail

// - once all rails have been built
//
// - zigzag through the fence,
//   - zigzag means if a rail index === 0 or index === railsNum - 1 then reverse directions of the iteration
//   - with each iteration shift the first element of the rail and concat it to the output string;
// - return the output string once there are no chars left in each of the rails;
//   - rail === nested array;

function decryptRailCipher(string, railsNum) {
  var fence = divideIntoFence(string, railsNum);
  var decrypted = '';
  var descending = false;
  var currentRail = 0;
  while (decrypted.length < string.length) {
    decrypted += fence[currentRail].shift();
    if (currentRail === 0 || currentRail === railsNum - 1) {
      descending = (descending ? false : true);
    }
    currentRail += (descending ? 1 : -1); // the current row either up or down for the next iteration
  }

  return decrypted;
}


function divideIntoFence(string, numberOfRails) {
  var newFence = createRailFence(numberOfRails); // a new empty fence with the proper number of rails
  var chars = string.split('');
  var cycle = numberOfRails * 2 - 2;             // how many chars before being back at the top
  var width = Math.floor(string.length / cycle); // number of full cycles contained in the string
  var partialWidthNums = string.length % cycle;  // number of extra chars that are not part of a complete cycle
  var currentRail = 0;
  var railMaxChars = (partialWidthNums > 0 ? width + 1 : width); // number of chars that should be in the row, accounts for extra chars no part of complete cycle;

  if (railMaxChars > width) { // decrease extra chars
    partialWidthNums -= 1;
  }

  while(chars.length > 0) { // keep looping until no more chars in the string
    newFence[currentRail].push(chars.shift()); 
    if (newFence[currentRail].length === railMaxChars) {
      currentRail += 1;
      if (currentRail != numberOfRails - 1) {
        railMaxChars = (partialWidthNums > 0 ? (width * 2) + 1 : (width * 2));
        partialWidthNums -= 1;
      }else {
        railMaxChars = width; // final rail will never have an extra char
      }
    }
  }

  return newFence;
}
// examples: a valid string of chars is the input
console.log(encryptRailCipher('WEAREDISCOVEREDFLEEATONCE', 3)); // --> 'WECRLTEERDSOEEFEAOCAIVDEN'
console.log(decryptRailCipher('WECRLTEERDSOEEFEAOCAIVDEN', 3)); // --> 'WEAREDISCOVEREDFLEEATONCE'
console.log(encryptRailCipher('WEAREDISCOVEREDFLEEATONCE', 6)); // --> 'WVTEOEAOACRENRSEECEIDLEDF'
console.log(decryptRailCipher('WVTEOEAOACRENRSEECEIDLEDF', 6)); // --> 'WEAREDISCOVEREDFLEEATONCE'
console.log(encryptRailCipher('WEAREDISCOVEREDFLEEATONCE', 5)); // --> 'WEVLNEEDEIRECAESACDTEOFOR'
console.log(decryptRailCipher('WCLEESOFECAIVDENRDEEAOERT', 5)); // --> 'WEAREDISCOVEREDFLEEATONCE'
console.log(encryptRailCipher('WE ARE DISCOVERED FLEE AT ONCE', 5)); // --> 'WEVLNEEDEIRECAESACDTEOFOR' 
console.log(decryptRailCipher('WCLEESOFECAIVDENRDEEAOERT', 5)); // --> 'WEAREDISCOVEREDFLEEATONCE'


