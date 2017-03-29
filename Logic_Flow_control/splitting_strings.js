// input: string to be split
//         a delimiter character;
// output: each substring;

function splitString(string, delimiter) {
  if (arguments.length < 2) {
    console.log('Error: No Delimiter')
    return;
  }

  var output = []
  var substring = ''
  for (var i = 0; i < string.length; i++) {
    if (string[i] == delimiter) {
      output.push(substring);
      substring = ''
    } else if (delimiter === '') {
        output.push(string[i])
    } else {
      substring += string[i]
    }

  }

  if (!!substring) {
    output.push(substring);
  }

  for (var i = 0; i < output.length; i++) {
    console.log(output[i])
  }
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello

