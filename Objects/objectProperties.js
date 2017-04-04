// Exercise 1

function objectHasProperty(object, property) {
  var keys = Object.keys(object);
  return keys.indexOf(string) !== -1;
}

// Exercise 2

function incrementProperty(object, property) {
  if (!!object[property]) {
    object[property] += 1;
  }else {
    object[property] = 1;
  }
  return object[property];
}

// Exercise 3

function copyProperties(object, copyObject) {
  var count = 0;
  for (propName in object) {
    copyObject[propName] = object[propName];
    count++;
  }

  return count;
}

// Exercise 4

function wordCount(string) {
  var countObject = {};
  var words = string.split(' ');
  var word;
  for (var i = 0; i < words.length; i++) {
    word = words[i];
    if (!countObject[word]) {
      countObject[word] = 0;
    }

    countObject[word] += 1;
  }

  return countObject;
}
