// returns an array list of all words in the list argument that are an anagram of the word argument;
function anagram(word, list) {
  return list.filter(function(currentWord) {
    return areAnagrams(currentWord, word);
  });
}

function areAnagrams(str1, str2) {
  var str2Array = sortCharsToArray(str2);
  return sortCharsToArray(str1).every(function (char, index) { 
      return char === str2Array[index];
  });
}

function sortCharsToArray(string) {
  return string.split('').sort();
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana'])); // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));  // [ "enlist", "inlets" ]