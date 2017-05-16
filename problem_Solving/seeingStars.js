// implement a function that displays an 8-pointed star

// input: a number n;

// output: no return value:
// - logs a star made of the char '*'

// - n = odd number >= 7;
//   n = total number of rows;
//   n = total number of '*' in the center row;

// - row = ' ' chars and '*' chars;
//   - rows 0 through (center - 1) and (center + 1) through last:
//          starNum = 3, spaceNum = n - 3;

//   - center row contains exactly n stars

//   - innerSpaces = spaces between the '*';
//     - starts at spaceNum / 2, decrements until it === 0
//   - outerSpaces = spaces outside the star;
//     - starts at 0, increments until it === spaceNum / 2;

// examples:
star(7)
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *

star(9)
// logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *

// data structure:
// use an array to hold the the rows
// rows are strings;

// algorithm
// - validate input (input >= 7 && input % 2 === 1)
// - initialize vars:
//   - star='', outerSpaces = 0, innerSpaces = (n-3)/2, center='*' * n, half = []
// - build first half save to starHalf
//   - start a loop that breaks at (n-1)/2;
//    - build row
//     - row = outerSpaces + '*' + innerSpaces + '*' + innerSpaces + '*' + outerSpaces;
//     - half.push(row);
// - concat half to star
//   - star += half.join('\n')
// - build center row ('*' * input)
// - reverse the order of half
// - concat to star;

function star(n) {
  var star = '';
  var top = buildHalfStar(n);
  var center = '*'.repeat(n) + '\n';
  var bottom = top.slice(0).reverse();

  console.log(star.concat(top.join(''), center, bottom.join('')));
}

function buildHalfStar(size) {
  var half = [];
  var outerSpaces = 0;
  var innerSpaces = (size - 3) / 2;
  for(var i = 0; i < Math.floor(size / 2); i++) {
      half.push(buildRow(outerSpaces, innerSpaces));
      outerSpaces += 1;
      innerSpaces -= 1;
  }

  return half;
}


function buildRow(outerSpaces, innerSpaces) {
  return ' '.repeat(outerSpaces) + '*' + ' '.repeat(innerSpaces) +
         '*' + ' '.repeat(innerSpaces) + '*' + '\n';
}















