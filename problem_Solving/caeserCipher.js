// Implement the caesar cipher. The caesar cipher is one of the earliest and simplest ways to encrypt plaintext so that passing or 
// communicating a message can be made secure. It is a substitution type of cipher, wherein the characters in a plaintext are substituted 
// by a letter some fixed number of positions in the alphabet. For example the letter A can be right shifted 3 and it will be substituted
//  with the letter D. This shift value is often referred to as the key. If a person has this key value then they can decode 
//  the "encrypted plaintext" or ciphertext.

// As one of the earlier ciphers, it only encrypts lower and upper cased letters of the alphabet. Any other character is left as is. 
// Likewise, the substituted letters are only taken from the corresponding letter case. In the event that the key value for shifting 
// exceeds the alphabet capacity, it wraps around.

//Implement a caeser cipher
// requirements:
// input: a string message to be encrypted, and the key
// output: a new string that has been encrypted according to the cipher rules and key value;

// - substitution cipher
//   - each letter will be shifted to another letter (key)
//     - example 'A' becomes 'D' if shifted 3 spaces;
// - key = the shift value
//    the values should wrap around
// - case sensitive (letter case stays the same)
// - any non word char is left the same
// - 
//     - if the value of the key plus the letter position > 26, newLetter index = key - (25 - letter index) + 1
// ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// or 'abcdefghijklmnopqrstuvwxyz'
//
// Simple shift
console.log(caesarEncrypt('A', 0));       // 'A'
console.log(caesarEncrypt('A', 3));       // 'D'

// // Wrap around
console.log(caesarEncrypt('y', 5));       // 'd'
console.log(caesarEncrypt('a', 47));      // 'v'

// // All letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// // ZABCDEFGHIJKLMNOPQRSTUVWXY
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// // Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!

// // Many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?
console.log(caesarEncrypt('a', 56));
// data structure;
// strings

// algorithm
// create a new string that will be the encrypted string;
// loop through the input string
//  - if the char is a letter
//    - find the index of the the matching char in the alphabet
//      - start count from the index of the plaintext letter
//      - increment the index until it has been incremented (key) number of times
//      - if the value of index is every > 25, subtract 26 from it then continue with the iterations
//      - else 
//       - newIndex = oldIndex + key;
//    - replace the current letter with the letter at the new index position;
//  - else leave the char unchanged add it to the output;
// return the encrypted string;

function caesarEncrypt(message, key) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var encrypted = ""
  var oldIndex;
  var newChar;
  for(var i = 0; i < message.length; i += 1) {
    oldIndex = alphabet.indexOf(message[i].toLowerCase());
    if (oldIndex > -1) {
      newChar = alphabet[findNewIndex(oldIndex, key)];
      if (message[i].toLowerCase() !== message[i]) { // account for letter casing
        newChar = newChar.toUpperCase();
      }

      encrypted += newChar;
    }else {
      encrypted += message[i];
    }
  }
  return encrypted;
}

function findNewIndex(oldIndex, key) {
  totalShiftReps = key;
  index = oldIndex;
  for(var i = 0; i < totalShiftReps; i += 1) {
    index += 1;
    if (index > 25) {
      index -= 26;
    }
  }
  return index;
}

