//Ex 1
var firstName = 'Daron';
var lastName = 'Spaulding';
var fullName = firstName + ' ' + lastName;


//Ex 2
console.log(firstName.concat(' ', lastName));

//Ex 3
var nameArray = fullName.split(' ');
console.log(nameArray);

//Ex 4
var language = 'JavaScript';
var idx = language.indexOf('S');
console.log(idx);

//Ex 5
charCode = language.charCodeAt(idx);
console.log(charCode);

//Ex 6
console.log(String.fromCharCode(charCode));

//Ex 7
console.log(language.lastIndexOf('a'));

//Ex 8
var a = 'a';
var b = 'b';
console.log(a > b);
b = 'B';
console.log(a > b);

//Ex 9
var aIndex = language.indexOf('a');
var vIndex = language.indexOf('v');
console.log(language.substr(aIndex, 4));
console.log(language.substr(vIndex, 4));

//Ex 10
console.log(language.substring(aIndex, 4));
console.log(language.substring(vIndex, 4));

//Ex 11
var fact1 = 'JavaScript is fun';
var fact2 = 'Kids like it too';
var compoundSentence = fact1.concat(' and ', fact2.toLowerCase());
console.log(compoundSentence);

//Ex 12
console.log(fact1[0], fact2[0]);

//Ex 13
var pi = 22 / 7;
console.log(String(pi).lastIndexOf('14'));

//Ex 14
var boxNumber = (356).toString();
console.log(boxNumber);

//Ex 15
 boxNumber = parseInt(boxNumber, 10);
 console.log(typeof boxNumber);
 boxNumber = String(boxNumber);
 console.log(typeof boxNumber);

 //Ex 16
var userName = prompt('Whats\'s Your Name?');
var greeting = 'Hello';
if (userName.endsWith('!')) {
  userName = userName.slice(0, -1);
  console.log(greeting.concat(' ', userName).toUpperCase());
}else {
  console.log(greeting.concat(' ', userName));
}
