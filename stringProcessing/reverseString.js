// function reverse(string) {
//   var reversed = '';
//   for(var i = string.length - 1; i >= 0; i -= 1) {
//     reversed += string[i];
//   }

//   return reversed;
// }

// alternate implementation using built in array functions

function reverse(string) {
  return string.split('').reverse().join('');
}

console.log(reverse('hello'));               // returns "olleh"
console.log(reverse('The quick brown fox')); // returns "xof nworb kciuq ehT"
