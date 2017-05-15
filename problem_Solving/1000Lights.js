// 1000 Lights

// You have a bank of switches before you, numbered from 1 to n. Each switch is connected to exactly one light that is initially off. 
// You walk down the row of switches, and toggle every one of them. You go back to the beginning, and on this second pass you toggle 
// switches 2, 4, 6, and so on. On the third pass, you go back again to the beginning and toggle switches 3, 6, 9, and so on. 
// You repeat this process and keep going until you have been through n repetitions.

// Write a program that takes one argument, total number of switches, and returns an array of lights that are on after n repetitions.

// requirements:
// - bank of switches:
//   - numbered from 1 to n;
//   - initially turned off;

// - start by toggling every switch (turn on all switches ?)
// - start over:
//   - this time just toggle switches starting at the second switch and every other one until the end of the switches;
//   - the next time you start at the third switch and toggle every third switch the end

// - continue to repeat this toggle process the same number of times as the size of the bank of switches

// input: size of the bank of switches
// output: an array of numbers indicating the number of each of the lights that are on after the n repetitions;

// - # of switches = input number;
// - # of reps = input number;
// - offset # = repetition number - 1;
//  - so on the 4th rep, start on the 2nd index number, toggle it, then skip 4 indices before toggling again;
// examples:
console.log(lightsOn(5));   // [1, 4];

// detailed result of each round for 5 lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off; 1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off; 1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));  // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(lightsOn(0)); // returns empty array [];
console.log(1); // [1];
console.log(-1); // returns empty array [];

//  data structure:
//  array of arrays:
//  - each array contains two elements, the light number, and its position

// algorithm
// - create array, add n number of arrays containing the number of the light and the position false;
//   - loop while counter < n;
//     - push [lightnumber, false];
//       - lighnumber = counter; intialize counter at 1;

// - iterate through the array n number of times:
//   - incrementor = index of the switches that should be toggled
//     - after each loop increase the value of the incrementor by 1;
//   - with each iteration of the loop toggle all the switches that the incrementor lands on;
//   
// - filter array for all true values;
// - map the array to just the light id's
// - return array;

function lightsOn(n) {
  if (n < 1) {
    return [];
  }

  var switchBank = createSwitchBank(n);
  var offset = 0;
  var lightsLeftOn;
  for(var i = 0; i < switchBank.length; i += 1) {
    for(var j = offset; j < n; j += (offset + 1)) {
      switchBank[j][1] = !switchBank[j][1];
    }
    offset += 1;
  }
  lightsLeftOn = switchBank.filter(function (light) { return light[1] });
  return lightsLeftOn.map(function (light) { return light[0] });
}

function createSwitchBank(size) {
  switchBank = [];
  for(var i = 1; i <= size; i += 1) {
    switchBank.push([i, false]);
  }

  return switchBank;
}
