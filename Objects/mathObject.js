// Exercise 1

function radiansToDegrees(radians) {
  return radians * 180 / Math.PI;
}

// Exercise 2
var degrees = -180;
console.log(Math.abs(degrees));

// Exercise 3

console.log(Math.sqrt(16777216));

// Exercise 4
console.log(Math.pow(16, 6));

// Exercise 5
var a = 50.72;
var b = 49.2;
var c = 49.86;

console.log(Math.floor(a));
console.log(Math.ceil(b));
console.log(Math.round(c));

function randomNum(min, max) {
  var diff = Math.abs(min - max);
  var temp;
  if (min > max) {
    temp = min;
    min = max;
    max = temp;
  }

  return Math.floor(Math.random() * (diff + 1) + min);
}

console.log(randomNum(40, 30));