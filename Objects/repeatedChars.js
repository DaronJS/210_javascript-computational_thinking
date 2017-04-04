function repeatedCharacters(string) {
  var countObj = {};
  var i;
  string = string.toLowerCase();

  for (i = 0; i < string.length; i++) {
    (countObj[string[i]]) || (countObj[string[i]] = 0);
    countObj[string[i]] += 1;
  }

  for (key in countObj) {
    if (countObj[key] < 2) {
      delete countObj[key];
    }

  }
  console.log(countObj);
  return countObj;
}

repeatedCharacters('Programming');    // { r: 2, g: 2, m: 2 }
repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
repeatedCharacters('Pet');            // {}
repeatedCharacters('Paper');          // { p: 2 }
repeatedCharacters('Baseless');       // { s: 3, e: 2 }
