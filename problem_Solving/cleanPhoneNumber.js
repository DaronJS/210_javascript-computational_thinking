// write a function that will take a string phone number with any extra chars (parens, dots, hyphens)
// returns a new string with just the 10 digit phone number
// rules:
// - return the string of 10 digits if the number is valid
//   
// - return a string of 10 '0' if the number is bad
//  - the number is bad if
  // - it contains less than 10 digits
  // - it contains more than 11 digits
  // - it contains 11 digits AND the first digit is not a 1

// examples
console.log(cleanPhoneNum('234-567-8967')); //       '2345678967' happy path
console.log(cleanPhoneNum('')); //                   '0000000000' empty string (less than 10 nums)
console.log(cleanPhoneNum('.2.3.4.789-3316-')); //   '2347893316' various extra chars
console.log(cleanPhoneNum(12345678989)); //          '2345678989' handles numbers    
console.log(cleanPhoneNum('34567899871')); //        '0000000000' 11 nums but first num is not a one
console.log(cleanPhoneNum('13456789987')); //        '3456789987' 11 nums but first num is a one (removes the one and returns the 10 digits num)
console.log(cleanPhoneNum('987654321123456'));//     '0000000000' handles any num of digits more than ll as invalid

// edge
// other input types? Numbers?

// data structure
// string and array

// algorithm
// - confirm/convert input into string representation
// - match all digits inside the string, extract to array
// - join array elements into new string;
// - handle logic for output:
//   - if string.length === 10 return the string;
//   - if string.length < 10 or string.length > 11 return invalidNumStr;
//   - if string.length === 11 and the first num === '1' return string index 1 through end of string;
//   - else return invalidNumStr;

function cleanPhoneNum(numStr) {
  var invalidNum = '0000000000' // return this string anytime we have an invalid number
  numStr = numStr.toString();
  var justNums = numStr.match(/\d/g);
  if(!justNums) {              // gaurd clause in case String#match returns null;
    return invalidNum;
  }

  if (justNums.length === 10) {
    return justNums.join('');
  }else if (justNums.length === 11 && justNums[0] === '1') {
    return justNums.join('').slice(1);
  }else {
    return invalidNum;
  }
}
