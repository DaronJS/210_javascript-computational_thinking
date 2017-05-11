// write a function that takes an input string of digits and returns a boolean base on whether the input
// is valid according to the Luhn Formula
// requirements for luhn formula:
//  - starting with the right most char, double every other digit in the string
//    - if the total of the double is more than 9 then subtract 9
//  - once you have all the new numbers, add them up into a single total
//    - if the total mod 10 is zero then it is valid according to luhn form
//    - otherwise it is invalid;
//  - ignore any non numeric chars in input string

// examples/ edge cases:
// other types Numbers? Arrays?
console.log(isValidLuhn('')); // how does it handle empty strings?
console.log(isValidLuhn('123')) // odd number of digits?
console.log(isValidLuhn('2323 2005 7766 3554')) // happy path ignores spaces
console.log(isValidLuhn('1111')); // false
console.log(isValidLuhn('8763')); //true

// data structure
// array/ numbers - need to perform calculations so the string digits will be converted an array of single digit number elements

// algorithm
// - return false if no digits or odd number of digits
// - match/ extract all digits from string into an array
// - map all the even indexed elements to the new value (value * 2) or (value * 2 - 9)
// - reduce all the values in the new array to a single value by summing
// - return true if sum % 10 === 0
    // - else false;

function isValidLuhn(str) {
  var numbers = str.match(/\d/g);
  var total;
  if (!numbers || numbers.length < 2 || numbers.length % 2 === 1) { // gaurd clause checks for validity: an even number of digits more than 0;
    return false;
  }

  numbers = numbers.map(function (el, idx) { // creates the correct array of nums ready for the final summing step
    el = Number(el);
    newVal = el * 2 < 10 ? el * 2 : el * 2 - 9;
    return idx % 2 === 0 ? newVal : el;
  });

  return numbers.reduce(function(acc, val){ return acc + val }) % 10 === 0; // reduces the array to a single value and checks if it ends with 0;
}