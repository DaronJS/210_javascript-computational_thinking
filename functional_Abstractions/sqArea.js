var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];
// logic:
// map: find area for each rectangle
// reduce: add total area for each rectangle into a single sum and return it;
function totalArea(rectangles) {
  var rectangleAreas = rectangles.map(function(rect) {
    return rect[0] * rect[1];
  });

  return rectangleAreas.reduce(function(area, val) {
    return area + val;
  });
}

console.log(totalArea(rectangles));


function totalSquareArea(rectangles) {
  var squares = rectangles.filter(function(rect) {
    return rect[0] === rect[1];
  });

  return totalArea(squares);
}

rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalSquareArea(rectangles));

