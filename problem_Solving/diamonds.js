// Write a function that displays a 4-pointed diamond in an nxn grid, where n is an odd integer supplied as an argument to the function. 
// You may assume that the argument will always be an odd integer.

// input: odd integer n;
// output: n x n grid making diamond;

// n.length = number of lines, max number of stars in the middle line, 
// each line increments stars by two until the max number is reach and then starts decrementing;
// starting space number = n / 2 .floor
// middle space number = 0;

// edge case = negative nums or zero? 

// data structure = string;

function diamond(size) {
  console.log([buildFirstHalf(size), buildLine(0, size), buildSecondHalf(size)].join(''));
}

function buildSecondHalf(size) {
  var secondHalf = '';
  var starNum = size - 2;
  var spaceNum = 1;

  while(starNum > 0) {
    secondHalf += (buildLine(spaceNum, starNum))
    spaceNum += 1;
    starNum -= 2;
  }

  return secondHalf;
}

function buildFirstHalf(size) {
  var firstHalf = '';
  var starNum = 1;
  var spaceNum = Math.floor(size / 2);
  
  while (starNum < size) {
    firstHalf += (buildLine(spaceNum, starNum));
    spaceNum -= 1;
    starNum += 2;
  }

  return firstHalf;
}

function buildLine(spacesNum, starsNum) {
  var line = '';
  for (var i = 1; i <= spacesNum; i += 1) {
    line += ' '; 
  }

  for (var i = 1; i <= starsNum; i += 1) {
    line += '*';
  }  

  return line + '\n';     
}



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