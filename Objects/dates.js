// Exercise 1

var today = new Date();

// Exercise 2

console.log("Today is " + today.getDay());

// Exercise 3

var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
console.log("Today is " + daysOfWeek[today.getDay()]);

// Exercise 4

console.log("Today is " + daysOfWeek[today.getDay()] + ' the ' + today.getDate());

// Exercise 5

function dateSuffix(num) {
  var numString = String(num);
  var last_number = Number(numString[numString.length - 1]); 
  if (Number(numString) > 10 && Number(numString) < 14) {
    return numString += 'th';
  }

  switch (last_number) {
    case 1:
      numString += 'st';
      break;
    case 2:
      numString += 'nd';
      break;
    case 3:
      numString += 'rd';
      break;
    default:
      numString += 'th';
  }

  return numString;
}

console.log("Today is " + daysOfWeek[today.getDay()] + ' the ' + dateSuffix(today.getDate()));

// Exercise 5

console.log("Today's date is " + daysOfWeek[today.getDay()] +
                              ', ' + today.getMonth() + ' ' + 
                              dateSuffix(today.getDate()));

// Exercise 6

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
console.log("Today's date is " + daysOfWeek[today.getDay()] + ', ' +
                                 months[today.getMonth()] + ' ' + 
                                 dateSuffix(today.getDate()));

// Exercise 7

function formattedMonth(dateObj) {
  return months[dateObj.getMonth()];
}

function formattedDay(dateObj) {
  return daysOfWeek[dateObj.getDay()];
}

function formattedDate(dateObj) {
  console.log("Today's date is " + formattedDay(dateObj) + ', ' + formattedMonth(dateObj) + ' ' + dateSuffix(dateObj.getDate()));
}

formattedDate(today);

// Exercise 8

console.log(today.getYear());
console.log(today.getFullYear());

// Exercise 9

console.log(today.getTime());

// Exercise 10

var tomorrow = new Date;
tomorrow.setTime(today.getTime());
tomorrow.setDate(4);

formattedDate(tomorrow);

// Exercise 11

var nextWeek = new Date(today.getTime());
console.log(nextWeek == today);
// returns false because even though they hold value that looks the same, the two are different objects. ES says that any non-primitive types
// that are compared using either double equals, triple equals or Object.is() will evaluate to false since they are in fact different objects
// unless of course two variables are compared that are in fact pointing to the same object.

// Exercise 12

console.log(nextWeek.toDateString() === today.toDateString()); // returns true since the returned value is the same for both expressions
nextWeek.setDate(nextWeek.getDate() + 7);
console.log(nextWeek.toDateString() === today.toDateString()); // returns false since the two values are now different;

// Exercise 13

function formatTime(dateObj) {
  var hour = String(dateObj.getHours()).padStart(2, '0');
  var mins = String(dateObj.getMinutes()).padStart(2, '0');
  return hour + ':' + mins;
}
console.log(formatTime(today));