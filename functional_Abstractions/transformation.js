// var count = [1, 2, 3, 4, 5];
// var doubled = count.map(function(number, index, array) {
//   return number * 2;                        // double each number
// });

// console.log(doubled);                       // logs [ 2, 4, 6, 8, 10 ]

function myMap(array, func) {
  var newArray = [];
  array.forEach(function(element) {
    newArray.push(func(element));
  });

  return newArray;
}

var plusOne = function(n) { return n + 1; };

console.log(myMap([1, 2, 3, 4], plusOne));       // [2, 3, 4, 5]

function getBooksTitle(books) {
  return myMap(books, function(book) {
    return book.title;
  })
}

var books = [
  {
    title: 'JavaScript and JQuery: Interactive Front-End Web Development',
    author: 'Jon Ducket',
    edition: '1st',
  },
  {
    title: 'Eloquent JavaScript: A Modern Introduction to Programming',
    author: 'Haverbeke',
    edition: '2nd',
  },
  {
    title: 'Learning Web Design: A Beginner\'s Guide to HTML, CSS, JavaScript, and Web Graphics',
    author: 'Jennifer Niederst Robbins',
    edition: '4th',
  },
];

console.log(getBooksTitle(books));