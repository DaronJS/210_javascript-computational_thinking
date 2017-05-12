// You are given a list of numbers in a'short-hand' 
// range notation where only the significant part 
// f the next number is written because we know 
// the numbers are always increasing

// possible separators: ['-', ':', '..']

// requirements:

// input: a string of numbers and separators representing shorthand notation of ranges of numbers ;
// output: a single list of numbers representing all the numbers that are included in the string of ranges;

//  - identify parts of string
//   - different parts are separated by ','
//   - each part contains a number or range of numbers
// - range (two numbers separated by one of the possible separators)
//   - the first number is the beginning of the range and is always less than the following number
//     - if the second number is less than the first number then
//       it is only the significant part, keep counting until a number
//       is reached that includes the significant part and is greater than the
//       lower limit number;

// examples/test cases
 console.log(parseAndExpandRanges('1,3,7,2,4,1')); // [1, 3, 7, 12, 14, 21]
console.log(parseAndExpandRanges('1-3,1-2')); // [1, 2, 3, 11, 12]
console.log(parseAndExpandRanges('1..3,1-2')); // [1, 2, 3, 11, 12]
console.log(parseAndExpandRanges('1-5:2')); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log(parseAndExpandRanges('104..02')); // [104..202]
console.log(parseAndExpandRanges('104..02')); // [104..202]
console.log(parseAndExpandRanges('204..02')); // [204..302]
console.log(parseAndExpandRanges('545,64:11')); // [545, 564 ... 611]

// algorithm
// - split input string on commas, save as an array of parts;
// - iterate through array of parts:
//   - if the part is a range(identify with regex) that needs to be expanded:
//     - if the lower end number is less than the previous number in the array 
//       then it is only the significant portion, count up from the previous value in the array until 
//       a number contains matches the significant portion, this is the start of the range
//     - count up from low end limit add each number to list of nums until you reach the
//       first number that contains the significant portion.
//     - return the full list created
//   - else it is just a number
//     - if the number is less than the previous number in the array
//       start counting from the previous number until a number matches the current number as the significant portion
//       add that number to the final output 
//     - else the number is the value it should be, add it to the final output and move on to the next part of the parts array;
// - return final output of nums;

function parseAndExpandRanges(rangeString) {
  var fullList = [];
  var parts = rangeString.split(',');
  var highVal;

  parts.forEach (function (part) {
    if (Number(part).toString(10) === part && Number(part) > (highVal || 0)) {
      fullList.push(Number(part));
      highVal = fullList.slice(-1)[0];
    }else {
      fullList = fullList.concat(expandRange(part, (highVal || 0)));
      highVal = fullList.slice(-1)[0];
    }
  });

  return fullList;
}

function expandRange(range, lastOfSequence) {
  var limits = processLimits(range.match(/\d+/g), lastOfSequence);
  var rangeList = [];
  if (limits.length === 1) {
    return Number(limits[0]);
  }else {
    limits.forEach (function (numStr, idx) {
      var num = Number(numStr);
      while (num < limits[idx + 1]) {
        rangeList.push(num);
        num += 1;
      }
      if (idx === limits.length - 1) {
        rangeList.push(Number(limits.slice(-1)[0]));
      }
    });
    return rangeList;
  }
}

function processLimits(strLimits, lastOfSequence) {
  return strLimits.map(function (strNum) {
    var count = lastOfSequence;
    if (Number(strNum).toString(10) === strNum && Number(strNum) > lastOfSequence) {
      lastOfSequence = Number(strNum);
      return strNum
    }else if (strNum[0] === '0') {
      if (lastOfSequence < 100) {
        return '1' + strNum;
      }else {
        return ((Number(lastOfSequence.toString(10)[0])) + 1) + strNum;
      }
    }else {
      while(!RegExp(strNum).test(String(count).slice(1))) {
        count += 1;
      }
      return String(count);
    }
  });
}



