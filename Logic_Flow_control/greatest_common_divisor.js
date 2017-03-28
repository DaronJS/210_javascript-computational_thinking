// normal loop (ineficient)

// function gcd(num1, num2) {
//   var max = num1 <= num2 ? num1 : num2;
//   var greatestCD = 1

//   for(var i = 2; i <= max; i++) {
//     if (num1 % i === 0 && num2 % i === 0) {
//       greatestCD = i;
//     }
//   }

//   console.log(greatestCD);
//   return greatestCD;
// }

// euclidian algorithm
function findGCD(bigNum, smallNum) {
  remainder = bigNum % smallNum;

  while (remainder !== 0) {
    bigNum  = smallNum;
    smallNum = remainder;

    remainder = bigNum % smallNum;
  }

  return smallNum;

}

// accepts any amount of number arguments and finds the greatest common divisor
function gcd() {
  var bigNum = arguments[0] > arguments[1] ? arguments[0] : arguments[1];
  var smallNum = arguments[0] < arguments[1] ? arguments[0] : arguments[1];
  var remainingNums = [];
  var greatestCommonDiv = findGCD(bigNum, smallNum);

  for (var i = 2; i < arguments.length; i++) {
    remainingNums.push(arguments[i]);
  }

  for (var i = 0; i < remainingNums.length; i++) {
    bigNum = greatestCommonDiv >= remainingNums[i] ? greatestCommonDiv : remainingNums[i];
    smallNum = greatestCommonDiv <= remainingNums[i] ? greatestCommonDiv : remainingNums[i];
    greatestCommonDiv = findGCD(bigNum, smallNum);
  }

  return greatestCommonDiv;
  
}
gcd(12, 4, 16);   // 4
gcd(15, 10, 38);  // 5
gcd(9, 2, 45, 90);    // 1

