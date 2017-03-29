//Write a function that takes a number of rows as the argument n and logs a square of numbers and asterisks. 
// assume n < 10 and n > 1

// function generatePattern(n) { // this works for numbers between 1 - 99, would need to add another line of code to make work for larger (n)
//   for (var i = 1; i <= n; i++) {
//     var outputLine = ''
//     var astNum = n - i;

//     for (var count = 1; count <= i; count++) {
//       outputLine += count;
//     }

//     for (var j = 1; j <= astNum; j++) {
//       if (j + i < 10) {   
//       outputLine += '*';
//       }else 
//       outputLine += '**';
//     }

//     console.log(outputLine);
//   }
// }

function generatePattern(n) {
  var lastRowString = '';
  var width;
  var string;
  var stars;

  for (var i = 1; i <= n; i++) {
    lastRowString += String(i);
  }

  width = lastRowString.length;

  for (var i = 1; i <= n; i++) {
    string = '';
    for (var j = 1; j <= i; j++) {
      string += String(j);
    }

    stars = width - string.length;

    for (var k = 1; k <= stars; k++) {
      string += '*';
    }

    console.log(string);
  }
}
generatePattern(20);