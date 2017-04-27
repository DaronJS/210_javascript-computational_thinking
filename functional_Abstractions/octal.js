function octalToDecimal(number) {
  return number.split('').reduce(function(acc, num, idx) {
    return acc + (Number(num) * (Math.pow(8, (number.length - 1) - idx)))
  }, 0);
}

console.log(octalToDecimal('011'));