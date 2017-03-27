function largestMultiple(number, dividend) {
  return Math.floor(dividend / number) * number;
}

function logMultiples(number) {
  for (var multiple = largestMultiple(number, 100); multiple > 0; multiple -= number) {
    if (multiple % 2 === 1) {
      console.log(multiple);
    }
  }
}

logMultiples(17);