// The vigenere cipher encrypts alphabetic text by way of polyalphabetic substitution. It uses a series of caesar ciphers based on 
// the letters of a keyword. Each letter of the keyword is treated as a shift value. For instance, the letter B corresponds to a shift
//  value of 1 and the letter d a shift value 3. In essence, the shift value used for the letters of the alphabet is its index value. 
//  This means that the letter a-z would be equivalent to numbers 0-25; likewise A-Z would be 0-25.

// Applying the vigenere cipher is done sequentially for each character by applying the current shift value to a caesar cipher 
// for that particular character. To make this more concrete lets take the example of the following:

// plaintext: Pineapples don't go on pizzas!
// keyword: meat

// Applying the vigenere cipher for each alphabetic character:
// plaintext : Pine appl esdo ntgo onpi zzas
// shift     : meat meat meat meat meat meat
// ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

// result: Bmnxmtpeqw dhz'x gh ar pbldal!

// Notice from the example that the key is not moved forward if the character is not in the alphabet. Like, the caesar cipher it only 
// encrypts alphabet characters.

// The objective for this exercise to implement the vigenere cipher. Take note that the case does not matter for the key 
// (i.e 'MEat' === 'mEaT'), the resulting encryption won't change depending on the case of the letters.

// requirments:
// input: a string to be encrypted, and a keyword string;
// output: an encrypted string:

// - polyalphabetic substitution

//   - a keyword is given (keyword = string of letter chars)

//   - each char in the keyword represents a key value for the shift

//     - if the letter is 'b' then the shift value = 1;
//       - possible shift values range from (0-25) a-b respectively, case insensitive

// - apply the current shift value (current number value of the letter) to a ceaser cipher
//   - ceaser cipher does not replace any chars that are not a letter;

// examples/ edge

console.log(encryptVigenere("Pineapples don't go on pizzas!", 'meat')) // --> Bmnxmtpeqw dhz'x gh ar pbldal!
console.log(encryptVigenere('', 'l')) // empty text
console.log(encryptVigenere('Hello', ''))// or empty keyword both return 'invalid input'

// algorithm:
// - return '' if plainText.length < 1;
// - return plainText if keyword.length < 1;
// - build tabula recta
//   - each array in the tabula recta will be a row, each index will be a column;
//   - initialize an array with the first string as the alphabet
//    - loop through the alphabet
//      - each loop move the first letter to the end of the alphabet
//        the next loop iteration should be on the most recent copy of the shifted alphabet
// - initialize three variables to look up the ciphertext in the tabula recta
//   - var currentKey = 0; this will keep track of the char in the keyword to use as the key value;
//   - var row = the indexOf the plaintext letter in the alphabet (0-25);
//   - var col = the indexOf the keyword letter in the alphabet;
// - initialize a cipherText string:
// - iterate through the plaintext String
//   - if the string char.toLowerCase() is a letter
//     - var isUpcase = true if char.toLowerCase != char
//     - row = tabula[0].indexOf(letter);
//     - col = tabula[0].indexOf(currentKey)
//     - cipherChar = tabula[row][col];
//     - if isUpcase 
//         ciperChar = cipherChar.toUpperCase();
//     - cipherText += cipherChar;
//   - else it's not a letter
//     cipherText += char;
// return cipherText;

function encryptVigenere(plainText, keyword) {
  var tabulaRecta = buildTabula();
  var cipherText = '';
  var currentKey = 0;
  var isUpCase;
  var row;
  var col;

  if(!plainText || !keyword) {return 'invalid input'}; // empty strings are invalid since it was not specified

  plainText.split('').forEach (function (char) {
    isUpCase = char.toLowerCase() === char ? false : true;
    char = char.toLowerCase();
    if(tabulaRecta[0].indexOf(char) > -1) {
      row = tabulaRecta[0].indexOf(char);
      col = tabulaRecta[0].indexOf(keyword[currentKey]);
      char = tabulaRecta[row][col];

      if (isUpCase) {                          // handle letter case;
        char = char.toUpperCase();
      }

      cipherText += char;
      currentKey = rotateKey(currentKey, keyword.length);
    }else {
      cipherText += char;
    }
  });

 return cipherText;
}

function rotateKey(current, size) {
  current += 1;
  return current % size;
}

function buildTabula() {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'
  var tabula = []
  for(var i = 0; i < 26; i++) {
    tabula.push(alphabet);
    alphabet = alphabet.split('');
    alphabet.push(alphabet.shift());
    alphabet = alphabet.join('');
  }
  return tabula;
}







