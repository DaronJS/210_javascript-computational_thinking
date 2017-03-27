// Exercise 1

// function say() {
//   if(false) {
//     var a = "hello from inside a block";
//   }

//   console.log(a);
// }

// say(); // logs undefined; the var a declaration is hoisted to the top of the function scope, the assignment however never executes
      // due to the conditional evaluating to false;

// Exercise 2

// function hello() {
//   a = 'hello';
//   console.log(a);

//   if(false) {
//     var a = 'hello again';
//   }
// }

// hello(); // logs 'hello'; the var 'a' declaration is hoisted to the top and declared as a function scoped variable
// console.log(a); // Reference Error; var 'a' is not accessible in the global scope;

// Exercise 3

// var a = 'hello';

// for (var i = 0; i < 5; i++) {
//   var a = i;
// }

// console.log(a); // logs 4; js hoists the a declaration inside the for loop to the top of the global scope, it has no effect
                // the var a gets reassigned during each iteration of the loop, the final loop assigns the value 4
                // to var a

// Exercise 4

// var a = 1;

// function foo() {
//   a = 2;
//   function bar() {
//     a = 3;
//     return 4;
//   }

//   return bar();
// }

// console.log(foo()); // logs 4: the return value of foo is the return value of bar which is 4
// console.log(a); // logs 3; var a was reassigned the value of 3 within the function bar


// Exercise 5

// a = 'global'

// function checkScope() {
//   var a = 'local';
//   function nested() {
//     var a = 'nested';
//     function supernested() {
//       a = 'supernested';
//       return a;
//     }

//     return supernested();
//   }

//   return nested();
// }

// console.log(checkScope()); // logs supernested; checkScope() returns the value of nested() which is the return value of supernested() which is 'supernested'
// console.log(a); // logs global; the global variable 'a' maintains it's original value;


// Exercise 6

// var a = 'outer';
// var b = 'outer';

// console.log(a); // logs 'outer';
// console.log(b); // logs 'outer';
// setScope(a);
// console.log(a); // logs 'outer'; a is unchanged
// console.log(b); // logs 'inner'; b has been reassigned;

// function setScope(foo) {
//   foo = 'inner';
//   b = 'inner';
// }


// Exercise 7

// var total = 50;
// var increment = 15;

// function incrementBy(increment) {
//   total += increment;
// }

// console.log(total); // logs 50;
// incrementBy(10); // reassigns var total to the value of 60;
// console.log(total); // logs 60;
// console.log(increment); // logs 15; the value of the global var increment is unchanged from its declaration/assignment at
                          // the top of the global scope;

// Exercise 8

// var a = 'outer';

// console.log(a); // logs outer;
// // setScope(); // uncaught typeerror/ not a function
// console.log(a);

// var setScope = function() {
//   a = 'inner';
// }




