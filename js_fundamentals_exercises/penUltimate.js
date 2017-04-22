penultimate('last word')               // 'last'
penultimate('Launch School is great!') // 'is'

function penultimate(string) {
  return string.split(' ')[-2]; // this bracket notation is reference the the key -2 instead of the second to last index
}

// working solution
  function penultimate(string) {
    array = string.split(' ');
    return array[array.length - 2];
  }