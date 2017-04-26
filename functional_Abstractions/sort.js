function mySort(array, func) {
  var leftSide;
  var rightSide;
  var middle;
  if (array.length === 1) {
    return array;
  }

  middle = Math.floor(array.length / 2);
  leftSide = array.slice(0, middle);
  rightSide = array.slice(middle, array.length)

  merge(mySort(leftSide), mySort(rightSide), func);
}

function merge(item1, item2, func) {
  var merged = [];
  var count = 0;
  while(func)
  
}