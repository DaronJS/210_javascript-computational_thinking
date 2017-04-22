// var MILLISECONDS_PER_MINUTE = 60000;

// function timeOfDay(deltaMinutes) {
//   var midnight = new Date('1/1/2000 00:00');
//   var afterMidnight = new Date(midnight.getTime() + deltaMinutes * MILLISECONDS_PER_MINUTE);
//   var hours = padWithZeroes(afterMidnight.getHours(), 2);
//   var minutes = padWithZeroes(afterMidnight.getMinutes(), 2);

//   return hours + ':' + minutes;
// }

// function padWithZeroes(number, length) {
//   var numberString = String(number);
//   while (numberString.length < length) {
//     numberString = '0' + numberString;
//   }

//   return numberString;
// }

// timeOfDay(0);       // "00:00"
// timeOfDay(-3);      // "23:57"
// timeOfDay(35);      // "00:35"
// timeOfDay(-1437);   // "00:03"
// timeOfDay(3000);    // "02:00"
// timeOfDay(800);     // "13:20"
// timeOfDay(-4231);   // "01:29"

var MILLISECONDS_PER_MINUTE = 60000;
var MINUTES_PER_HOUR = 60;
var HOURS_PER_DAY = 24;
var MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;
var MILLISECONDS_PER_DAY = MILLISECONDS_PER_MINUTE * MINUTES_PER_HOUR * HOURS_PER_DAY;

function afterMidnight(timeStr) {
  // var timeComponents = timeStr.split(':');
  // var hours = parseInt(timeComponents[0]);
  // var minutes = parseInt(timeComponents[1]);

  // return hours * MINUTES_PER_HOUR + minutes;
  
}

function beforeMidnight(timeStr) {
  var deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }
  return deltaMinutes;
}

afterMidnight('00:00');        // 0
beforeMidnight('00:00');       // 0
console.log(afterMidnight('12:34'));        // 754
beforeMidnight('12:34');       // 686

