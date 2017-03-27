function logOddNumbers(int) {
  for(var i = 1; i <= int; i += 2) {
    if (i % 2 === 0) {
      continue;
    }
    console.log(i);
  }
}

logOddNumbers(19);
