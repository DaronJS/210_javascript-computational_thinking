// Write a function that displays a 4-pointed diamond in an nxn grid, where n is an odd integer supplied as an argument to the function. 
// You may assume that the argument will always be an odd integer.

// requirements:
// input: a number (n),
// output: no return value;
//        function should print out a diamond pattern made of the char '*'
// - n = the number of total rows in the diamond;
// - n = the number of stars in the widest (center) row of diamond;
// - row = a number of space chars followed by a number of '*' chars;
// - number of stars starts with one and increments by two in each line
//   - if the number of stars = the input (n) then it is the middle line and the incrementor should reverse
//   - if the star number is less than one then the diamond is finished;
// - number of spaces = total width (n) minus number of stars in the row / 2;
//   - spaceNum = n - 1 / 2;
//     - decrement spaceNum by 1;
//      - if spaceNum === 0 reverse the decrement 1, should become increment 1;
//        
//examples/ edge
diamond(1);
// // logs
// *
diamond(3);
// logs
//  *
// ***
//  *
diamond(9);
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
// 
// data structure:
// array of number of stars in each row;
// string for build up of output;

// algorithm:
// create an array of numbers representing the number of stars in each row;
//  - rowsArray = [1, 3, 5 ....n];
//   - value increments by two until it equal n 
//   - then it decrements back down to 1;
// create an output string
// - diamond
// iterate through rowsArray
//  - prepend appropriate num of spaces
//    - spaceNum = n - starsNum / 2;
//  - append starsNum (value of the element in the array at the current index)
//  - if the starsNum === n then incrementor = -2;
//  
// return the diamond string;

function diamond(size) {
  var rowsArray = buildRowsArray(size);
  var diamond = '';

  rowsArray.forEach (function (starNum) {
    diamond += buildRow(starNum, size);
  });

  console.log(diamond);
}

function buildRow(starNum, size) {
  var spaceNum = (size - starNum) / 2;
  var row = ''
  row += addChars(' ', spaceNum);
  row += addChars('*', starNum);

  return row + '\n';
}

function addChars(char, num) {
  var str = ''
  for (var i = 0; i < num; i += 1) {
    str += char;
  }

  return str;
}

function buildRowsArray(size) {
  var rows = [];
  var starsNum = 1;
  var incrementor = 2;
  while (starsNum > 0) {
    rows.push(starsNum);
    if (starsNum === size) {
      incrementor = -2;
    }
    starsNum += incrementor;
  }
  return rows;
}

// implement a hollow diamond function
// requirements:
// input: a number (n),
// output: no return value;
//        function should print out a hollow diamond pattern, outer edge made of '*';
//         - inner will be all ' ' space chars;

// - n = the number of total rows in the diamond;
// - n = the number of chars in the widest (center) row of diamond;

// - row = spaces + star + spaces + star;
//   - initial spaces = size - diamondPart / 2;
//   - inner spaces = diamond part - 2 or 0;

// - number of stars starts with one and increments by two in each line
//   - if the number of stars = the input (n) then it is the middle line and the incrementor should reverse
//   - if the star number is less than one then the diamond is finished;
// - number of spaces = total width (n) minus number of stars in the row / 2;
//   - spaceNum = n - 1 / 2;
//     - decrement spaceNum by 1;
//      - if spaceNum === 0 reverse the decrement 1, should become increment 1;
// 
//     *
//    * *
//   *   *
//  *     *

hollowDiamond(9);

function hollowDiamond(size) {
  var rowsArray = buildHollowRowsArray(size);
  var diamond = '';

  rowsArray.forEach (function (diamondPart) {
    diamond += buildHollowRow(diamondPart, size);
  });

  console.log(diamond);
}

function buildHollowRow(diamondPart, size) {
  var initialSpaceNum = (size - diamondPart) / 2;
  var innerSpaceNum = diamondPart - 2;
  var row = ''
  row += addChars(' ', initialSpaceNum);
  row += '*'
  row += addChars(' ', innerSpaceNum);

  if (diamondPart > 1) {
    return row + '*\n';
  }else {
    return row + '\n';
  } 
}

function buildHollowRowsArray(size) {
  var rows = [];
  var diamondPart = 1;
  var incrementor = 2;
  while (diamondPart > 0) {
    rows.push(diamondPart);
    if (diamondPart === size) {
      incrementor = -2;
    }
    diamondPart += incrementor;
  }
  return rows;
}
