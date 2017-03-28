var grade1 = Number(prompt('Enter score 1'));
var grade2 = Number(prompt('Enter score 2'));
var grade3 = Number(prompt('Enter score 3'));

var letter_grade;

function average(numbers) {
  var total = 0;

  for(var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }

  return total / arguments.length;
}



grade_average = average(grade1, grade2, grade3)

if (grade_average >= 90) {
  letter_grade = 'A';
} else if (grade_average >= 70) {
  letter_grade = 'B';
} else if (grade_average >= 50) {
  letter_grade = 'C';
} else {
  letter_grade = 'F';
}

message = 'Based on the average of your 3 scores you letter grade is ' + letter_grade;

console.log(message);