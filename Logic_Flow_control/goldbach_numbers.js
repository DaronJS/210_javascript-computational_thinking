function isPrime(number) {
  var squart = Math.floor(Math.sqrt(number));
  var answer = true;

  if (number <= 1) {
    return false;
  } else if (number === 3) {
    return true;
  } else {
      for(var i = 2; i <= squart; i++) {
        if (number % i === 0) {
          answer = false;
        }
      }

    return answer;
  }
}

// logs all goldbach number pairs for input (n)
function checkGoldbach(n) {
  var smPrime = 1;
  var lgPrime = n - 1;


  if (n < 4 || n % 2 !== 0) {
    console.log(null);
    return;
  }

  while (smPrime <= (n / 2)) {
    if (isPrime(smPrime) && isPrime(lgPrime)) {
      console.log(smPrime, lgPrime);
    }

    smPrime++;
    lgPrime--;
  }
}

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53