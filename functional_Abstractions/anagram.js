function anagram(word, list) {
  var sortedWord = sortChars(word);
  return list.filter(function(el) {
    return areAnagrams(el, sortedWord);
  });
}

function areAnagrams(str1, str2) {
  var doesMatch = true;
  sortChars(str1).forEach(function (char, index) { 
      if (char !== str2[index]) {
        doesMatch = false;
      }
  });
  return doesMatch;
}

function sortChars(string) {
  return string.split('').sort();
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana'])); // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));  // [ "enlist", "inlets" ]