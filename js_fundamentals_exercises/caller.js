function doubler(number, caller) {
  console.log('This function was called by ' + caller + '.');
  return number + number;
}

doubler(5, 'Victor');       // 10
// This function was called by Victor.

function makeDoubler(caller) {
  return function doubler(number) {
    console.log('This function was called by ' + caller + '.');
    return number + number;
  }
}