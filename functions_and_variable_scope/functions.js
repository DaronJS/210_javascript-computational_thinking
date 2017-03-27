
function sum(a, b, c) {
  return a + b + c;
}

function average(a, b, c) {
  return sum(a, b, c) / 3;
}

console.log(average(3, 5, 8));

function average(array) {
  total = 0
  for(var i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total / array.length;
}

function sum(array) {
  total = 0
  for(var i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

function average(array) {
  return sum(array) / array.length;
}

console.log(average([1, 2, 3, 4, 5]));

var temperatures = [23, 45, 89, 9, 75];

console.log(average(temperatures));
