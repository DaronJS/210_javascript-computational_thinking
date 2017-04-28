// returns an array list of all words in the list argument that are an anagram of the word argument;
function anagram(word, list) {
  return list.filter(function(currentWord) {
    return areAnagrams(currentWord, word);
  });
}

function areAnagrams(str1, str2) {
  str2 = sortChars(str2);
  return sortChars(str1).every(function (char, index) { 
      return char === str2[index];
  });
}

function sortChars(string) {
  return string.split('').sort();
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana'])); // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));  // [ "enlist", "inlets" ]