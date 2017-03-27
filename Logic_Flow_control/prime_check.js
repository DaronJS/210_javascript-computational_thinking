function isPrime(number) {
  var squart = Math.floor(Math.sqrt(number));
  var answer = true;

  if (number <= 1) {
    console.log(false);
    return false;
  } else if (number === 3) {
    console.log(true);
    return true;
  } else {
      for(var i = 2; i <= squart; i++) {
        if (number % i === 0) {
          answer = false;
        }
      }

    console.log(answer);
    return answer;
  }
}

isPrime(1);  // false
isPrime(2);  // true
isPrime(3);  // true
isPrime(43); // true
isPrime(55); // false
isPrime(0);  // false