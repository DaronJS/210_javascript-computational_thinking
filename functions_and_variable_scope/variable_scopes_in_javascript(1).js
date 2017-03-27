//Exercise 1
// var a = "outer";

// function testScope() {
//   var a = 'inner'
//   console.log(a)
// }

// console.log(a); // logs "outer" since var a was declared and assigned in global scope
// testScope(); // logs 'inner'/ the function created a new scope and the var 'a' in the function scope shadows the var a in the global
// console.log(a); // logs outer since the outer scoped var a is unchanged


//Exercise 2
// var a = 'outer'

// function testScope(){
//   a = "inner";
//   console.log(a)
// }

// console.log(a); // logs outer - since it references the var a defined in the global scope
// testScope(); // logs inner - the var a defined in the global scope is reassigned within the function call to 'inner'
// console.log(a); // logs inner - the value of var a was reassigned inside the function call on the previous line



// Exercise 3

// var basket = "empty";

// function goShopping() {
//   function shop1() {
//     basket = 'tv';
//   }

//   console.log(basket);

//   function shop2() {
//     basket = 'computer'
//   }

//   function shop3() {
//     var basket = 'play station';
//     console.log(basket)
//   }

//   shop1();
//   shop2();
//   shop3();

//   console.log(basket)
// }

// goShopping(); // first the function logs the value of basket that was defined in the global scope: 'empty'
              // next shop1() is called which reassigns the value of basket to 'tv' but doesnt log anything
              // next shop2() is called which again reassigns the basket variable, this time to 'computer'
              // the shop3() is called a new function-scoped variable 'basket' is defined and assigned the value of 
              // 'play station' that value is logged. Finally the value of the global scoped variable 'basket' is logged
              // which is 'computer'

// Exercise 4

// function hello() {
//   a = 'hello';
// }

// hello();
// console.log(a);

// Logs 'hello', the function call hello() creates a global variable 'a' when it cannot find one already declared

// Exercise 5

// function hello() {
//   var a = 'hello'
// }

// hello();
// console.log(a);

// Reference Error, the var a defined inside the hello() function is not accessible in the global scope


// Exercise 6

// console.log(a);

// var a = 1;

// logs undefined - the var a declaration is hoisted above the console.log statment but the value isn't assigned until
// after, any declared variable with an unassigned value has the value of 'undefined'


// Exercise 7
// console.log(a);

// function hello() {
//   a = 1;
// }

// Reference Error; the function hello() (although hoisted to the top of the scope) is never invoked and thus the variable a
// is never searched for according to lexical scoping rules and thus never created due to javascript not finding a declared variable
// match. Thus the function defined has no effect whatsoever and the variable 'a' has not been defined and will return a reference
// error.