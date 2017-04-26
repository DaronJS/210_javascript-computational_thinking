// snippet 1
var counter = 5;
var rate = 3;
console.log('The total value is ' + (counter * rate));

function counter(count) {
  // ...
}
// 'The total value is 15' will be logged to the console, the variable counter is referenced in 
// the console.log statement not the call to the function counter();

// snippet 2
function counter(count) {
  // ...
}

console.log('The total value is ' + (counter * rate));

var counter = 5;
var rate = 3;
// 'The total value is NaN' will be logged since the declaration of the variables is hoisted to the top of the scope but the assignment
// of integers doesnt happen until after the call to console.log, the value of counter and rate are `undefined` and multiplying the returns NaN

// snippet 3
var counter = 5;
var rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + (counter * rate));
// again, 15 is logged since the function counter isn't relevant;