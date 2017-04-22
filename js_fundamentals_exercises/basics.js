// // 1
// var paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed' +
//                 'ligula at risus vulputate faucibus. Aliquam venenatis nibh ut justo dignissim' +
//                 'dignissim. Proin dictum purus mollis diam auctor sollicitudin. Ut in bibendum ' +
//                 'ligula. Suspendisse quam ante, dictum aliquam tristique id, porttitor pulvinar' +
//                 'diam. Maecenas blandit aliquet ipsum. Integer vitae sapien sed nulla rutrum' +
//                 'hendrerit ac a urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.';
// // 2
// var myBoolean = true;
// var myString = 'hello';
// var myArray = [];
// var myOtherString = '';

// if (myBoolean) {
//   console.log('Hello'); // Logs hello since myBoolean evaluates to true the code runs;
// }

// if (!myString) {
//   console.log('World'); // this code will not run, the bang operator will return false since myString has a truthy value;
// }

// if (!!myArray) {
//   console.log('World'); // logs 'World', and empty array has a truthy value the double bang operator coerces it to a boolean true, so the code runs;
// }

// if (myOtherString || myArray) {
//   console.log('!'); // logs '!' myOtherString evaluates to false since it contains an empty string which has a falsy value, || operator will then
//                     // evaluate the second expression which is the reference to the empty array object which contains a truthy value and the conditional
//                     // evaluates to true and will run the code in the block
// }

// // counting characters

// text = prompt('Please write a phrase');
// text = text.replace(/\W/, '');
// console.log('There are ' + text.length + 'characters in ' + text)


// converting string to integer

// function stringToInteger(string) {
//   var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//   var isNegative = string[0] === '-';
//   var output = 0;
//   var number;
//   var i;
//   var p;

//   string = string.replace(/[\+\-]/g, '');
//   for (i = 0; i < string.length; i += 1) {
//     number = numbers[string[i]];
//     p = (string.length - (i + 1));
//     output += number * (10**p);
//   }

//   if (isNegative) {
//     return -(output);
//   }

//   return output;
// }

// console.log(stringToInteger('-4321'));
// console.log(stringToInteger('570'));
// console.log(stringToInteger('+100'));



function integerToString(integer) {
  var LOOKUP = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var newString = ''
  var num;
  var i;

  do { 
    num = integer % 10;
    integer = Math.floor(integer / 10);
    newString = LOOKUP[num] + newString;
  }while (integer > 0);

  return newString;
}

console.log(integerToString(4321));    // "4321"
console.log(integerToString(0));       // "0"
console.log(integerToString(5000));    // "5000"


function signedIntegerToString(integer) {
  if (integer > 0) {
    return '+' + integerToString(integer);
  } else if (integer < 0) {
    integer = Math.abs(integer);
    return '-' + integerToString(integer);
  } else {
    return integerToString(integer);
  }
}

console.log(signedIntegerToString(4321));    
console.log(signedIntegerToString(0));    
console.log(signedIntegerToString(-123));    

