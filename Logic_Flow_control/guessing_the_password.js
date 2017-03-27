var password = 'password'
var attempt;
var attempts_remaining = 3


while (!!attempts_remaining) {
  attempt = prompt('Please enter the password');

  if (attempt === password) {
    console.log('You have successfully logged in');
    break;
  } else {
    attempts_remaining -= 1;
  }
}

if (attempts_remaining === 0) {
  console.log('You have been denied')
}