// Write a function that takes a string and returns true if it can spell
// the argument passed in from a set of blocks that have a letter on each side
// the block can only be used once, false if it cannot

// requirements
// - letters are case insensitive
// - each block can only be used once (no two or more instances of same letter)
// - return true if the whole word can be spelled in this manner
// - false if not

// blocks: 

// examples:
console.log(isBlockWord('BATCH')); // true;
console.log(isBlockWord('BUTCH')); // false;
console.log(isBlockWord('jest')); // true;
console.log(isBlockWord('flOW')); // true;
console.log(isBlockWord('APPLE')); // false
console.log(isBlockWord('apple')); //false
console.log(isBlockWord('aPPle')); // false;
console.log(isBlockWord('Box')); // false;

// data structure
// array of strings containing each pair in an element

// algorithm
// - set available letters array of string blocks;
// - normailize input (uppercase everything);
// - transform into Array for iteration purposes
// - step through the input
    // - check if the element is available for use
    //   - if it is then remove the block from the available list
    //       then continue to next element 
    //   - if its not available return false;
    // - return true (the iteration never returned false and finished the loop)


function isBlockWord(word) {
  var available = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];
  var chars = word.toUpperCase().split('');
  for(var i = 0; i < chars.length; i += 1) {
    var blockRemoved = false;
    available.forEach(function (block, idx) {
      if (RegExp(chars[i]).test(block)) {
        available.splice(idx, 1);
        blockRemoved = true;
      }
    });
    if(!blockRemoved) {return false};
  }
  return true;
}