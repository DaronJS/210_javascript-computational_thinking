# Javascript Data Types
### There are five primtive data types:
  * number
  * boolean
  * string
  * null
  * undefined

  ** *Primitive* ** data types are immutable in Javascript meaning that cannot be changed, instead when a new primitive value seems to change it is in fact a wholly new value being used and assigned within the javascript program!

### and one **Compound** data type:
  * object

  - all other javascript constructs (arrays and functions) are Objects and are mutable.

## Number
- uses a 64bits to store numbers in memory 
- all basic arithmatic operations are supported (+, -, *, /)
- uses a floating point system to represent all numbers, unlike other programming languages that use different data types to represent integer, float, decimal, real and double values.

#### There are several special number values:
  - Ifinity: when you need a number that is greater than any other number.
  - -Infinity: when you need a number that is less than any other number.
  - NaN: means "not a number", 'NaN' is used when math functions enounter an error.


## Boolean
This data type represents truth values of logic. 

- Only two possible values: `true` or `false`.

The result of comparison operators would be a boolean.

## String
A sequence of characters, this data type is used to represent text.

- no size limit.
- can use single or double quotes (no functional difference between the two in javascript)
- most common string operation is concatenation using the ("+") operator.
- special characters like tab, newline, carriage return can be used within strings by adding an escape sequence "\n" for newline.

#### Character access
Like many programming languages Javascript uses 0 based indexing meaning the character count in a string starts counting from 0.

Two easy methods to access characters in a string are:
  - charAt(index)
  or
  - brackets: "string"[index]

Strings also have a length property which can be accessed with:
'String'.length: returns the number of characters contained in the string.


# Variables

### General Guidlines in naming variables in Javascript

1. Javascript is case sensitive: `my_variable` is different than `my_Variable`
2. Variable names can be any length
3. Must start with a unicode letter, an underscore or a dollar sign.
4. Succeeding characters must also be unicode letters, underscore or dollar sign.
5. Must not be a reserved word.

valid variables
```
_count
$price
value
my_variable
otherVariable
```
invalid
```
1count
my#variable
```

### Variable Declaration
Variables must be declared before they are used. They are declared with the `var` keyword.
Then they can be assigned with the `=` assignment operator.

This can be combined into a single step of declaration and assignment.
`var myVariable = 3`

Any variable that is declared but is not assigned a value will have the value `undefined`

#### Javascript is a dynamically typed language which means any variable can be reassigned to a new data type without error. A variable in javascript is simply a name for a value at any given time. 


# Operators

### Arithmatic 
- supports all basic arithmatic operators.
- one of note is the (%) operator. This is the modulo operator in other programming languages, in javascript however it is the remainder operator and acts differently than expected when the dividend is a negative number.

### Assignment
- `=` is the assigment operator.
- can be combined with other types of operators like:

####    Name                      Shorthand Operator      Meaning

Assignment                    a = b                       a = b

Addition Assignment           a += b                      a = a + b

Subtraction Assignment        a -= b                      a = a - b

Multiplication Assignment     a *= b                      a = a * b

Division Assignment           a /= b                      a = a / b

Remainder Assignment          a %= b                      a = a % b


### Comparison Operators
These operators compare two operands and return a boolean (true or false)
If the two operands are different types Javascript will try to convert them to suitable types. Many Javascript programmers will try to just use the strict versions (===) or (!==) instead to prevent unwanted consequences.

#### Operator                    Description

**Equal (==)**                Returns true if the operands are equal

**Not Equal (!=)**            Returns true if the operands are not equal

**Strict Equal (===)**        Returns true if the operands are equal and of the same type

**Strict Not Equal (!==)**    Returns true if the operands are not equal and of the same type

**Greater than (>)**          Returns true if the left operand is greater than the right

**Less than (<)**             Returns true if the left operand is less than the right

## String Operators
Strings can be compared like numbers, they are compared according to the Unicode lexigraphical ordering.

```
'50' < '6' # true because '5' comes before '6' in the ordering 
```

`+=` can also be used with string concatenation and works as expected.

## Logical Operators 

### Logical And (&&)
  - returns true if both booleans are true, false otherwise
  - for non-boolean values returns false if the first operand can be converted to false, otherwise it returns the second operand.

### Logical Or (||) 
- returns true if either boolean value is true.
- for non-boolean values returns the first value if it can be converted to true, returns the second operand otherwise.

### Logical Not (!) 
 - unary operator (only takes a single operand)
 - returns true if it's operand can be converted to false
 - returns false otherwise


## Expressions and Statements

### Expressions
- any valid code that evaluates to a value is an expression
- javascript follows normal order of precedence when evaluating expressions

#### Shorthand increment and decrement (a += 1) can be further shortened
- a++ (increments a by 1) same as (a += 1)
- a-- (decrements a by 1) same as (a -= 1)

**also**

- --a
- ++a 

However these to forms work differently in complex expressions:
- if the operator appears before the operand javascript evaluates the expression then modifies the operand.
- if the operand appears before the operator, javascript modifies the operand then evaluates the expression.


### Statements
Statements, unlike expressions, don't necessarily resolve to a value, instead they help control the flow and execution of the program.
  -examples of statements
    - `if..else`
    - `var` declaration
    - `for` or `while` loops


# Input and Output

## prompt()
- this method can be used to get user input 
- creates a pop up box, if the user clicks 'OK' then the user input will be returned as a string, if the user clicks 'cancel', null is returned.
- input is always returned as a string, if you wish to use an input number you must do the conversion yourself

## alert()
- can be used to notify the user of an event but doesnt require any user input.


# Explicit Primitive Type Coercions
- primitive types are immutable so coercion (or conversion) is actually returning a new value of the desired type.

## Number()
This function can be used to coerce another type into a number value,
if the value cannot be represented as a number then it will return NaN:
```
Number('1'); // returns 1

Number('abc123'); // returns NaN
```
## parseInt(string) and parseFloat(string)
- these two global functions turn Strings into Numbers with each only handling numeric values in an integer or floating-point format respectively.

```
parseInt('123'); // 123
parseFloat('123.33'); // 123.33
parseInt('123.33'); // 123
```

## String()
- this function converts other primitive types into strings.

```
String(123); // "123"
String(true); // 'true'
```

### toString(number)
- this method converts types its called on into a string.

```
123.toString(); // '123'
true.toString(); // 'true'

```

## Primitives to Booleans

If you have a string representation of a boolean, you can just compare it with 'true' to determine whether the string is 'true' or 'false'
```
var a = 'true';
var b = 'false';

a === 'true'; // true
b === 'true'; // false
```

### Boolean()
This function can be used to coerce another primitive type into a boolean value based on the `truthy` and `falsy` rules in Javascript.

In Javascript 
`null`, `NaN`, `0`, `''`, `false`, `undefined` all have `falsy` values.
all other values are `truthy` and will evaluate to `true`

```
Boolean(null);        // false
Boolean(NaN);         // false
Boolean(0);           // false
Boolean('');          // false
Boolean(false);       // false
Boolean(undefined);   // false
Boolean('abc');       // other values will be true
Boolean(123);         // true
Boolean('true');      // including the string 'true'
Boolean('false');     // but also including the string 'false'!
```

#### The double '!' operator provides a simpler way to force a truthy or falsy value to its boolean equivalent


```
!!(null);       // false
!!(NaN);        // false
!!(0);          // false
!!('');         // false
!!(false);      // false
!!(undefined);  // false

!!('abc');      // true
!!(123);        // true
!!('true');     // true
!!('false');    // this is also true! All strings are truthy in JavaScript
```


## Implicit Conversions of Primitive Data Types

### The Plus (+) Operator
The Unary plus operator tries to convert values into numbers.
```
+('123') // 123
+('') // 0 
+(null) // 0
+('a') // NaN
```
When the binary (+) is used it is either adding numbers or concatenating strings:
- when used with one operand being a string it will try to convert the other operand to a string 
```
1 + true // 2   it converts true into the number 1 
'123' + 123 // "123123"
'a' + null // 'anull' null is coerced into a string and concatenated with the 'a'
```

Other arithmatic operators are only used for numbers so Javascript tries to coerce both operands into numbers.

```
1 - true // 0
'123' * 3 // 369 - the string is coerced into a numbers
'8' - "1" // 7 
```
### Relational Operators

Generally Javascript tries to coerce these operations into number comparisons unless both operands are strings:

```
11 > '9' // true   the '9' is converted into 9
123 > 'a' // false   'a' is coerced into NaN; any number comparison with NaN is false
123 <= 'a' // also false
```

### Equality Operators

JS provides non-strict equality operators (==) and (!=) as well as strict (===) and (!==). The strict versions will not perform any type coercions.

non-strict
```
0 == false        // true - false is coerced into number 0
'' == undefined   // false - undefined is coerced to "undefined"
'' == 0           // true - "" is coerced to 0
true == 1         // true - comparison of a boolean and a non-boolean will coerce the boolean to a number
'true' == true    // false, and source of many bugs
```

strict
```
0 === false        // false
'' === undefined   // false
'' === 0           // false
true === 1         // false
'true' === true    // false
```

# BEST PRACTICES

## Always use explicit type coercions

## Always use strict equality operators





# Loops and Iterators

## While Loop
This loop continues so long as its condition is true
```
var a = 1;
var b = 2;

while (a < 1) {
  console.log(a)
  a++
}
// This loop only executes once, after the first execution the condition is checked again
// since the condition no longer evaluates to true the loop breaks.
```

### The `break` keyword will exit a loop immediately
### The `continue` keyword will skip the rest of the current iteration and continue with the next iteration.


## The 'do/while' Loop 
This loop will execute at least once, the condition will be checked at the end of the first iteration before moving on to the next cycle of the loop.

```
var counter = 0;
var limit = 0;

do {
  console.log(counter);
  counter++;
} while (counter < limit);
```

## The 'for' loop 
This is the most common looping structure in Javascript. It lets you combine three key elements of a loop: setting the initial state, evaluating a condition, and making some type of change before re-evaluation the condition. All three elements appear as a singel statement.

syntax:
```
for(initialExpression; condition; incrementExpression) {
  
}

```
Iterator variables are by convention usually named `i` or `j`. For example:
```
for (var i = 0; i < 10; i++) {
  console.log(i);
}
```
Any of the three parts of the for statement above can be left out. The var assignment can be done before the for statment, the condition and incrementor could both be done inside the block being executed inside the loop.


# Functions
A function is a set of procedures that can be stored for use anywhere in the program.

- `function` keyword
- name of the function
- comma separated params
- block of statments (function body)

#### In javascript, if a function does not contain an explicit `return` statement or the `return` statment does not include a value, the function will implicitly return `undefined`.


#### Parameters are the values used when defining the function, the placeholder variables that will expect values to be passed into them when the function is called. The arguments are the actual values passed into the function when it is called.

## Function Invocation and Arguments
To call a function we simply add `()` to the end of the function's name:
```
function startle() {     // define the function
  console.log("Yikes!");
}

startle() // call the function, logs "Yikes!"
```

#### A few things to note:
- Calling a function with too few arguments does not raise an error.
- Within a Function, an argument that wasn't provided in the call will have the value of undefined.
- excess arguments are ignored.


# Scoping

## Global Scope
Variables declared outside of any function are declared within the global scope and thus are accessible throughout the entire program.

## Function Scope
Every new function declared creates a new scope inside it's body. Function scopes nest inside each other, scopes inherit access to any variables from surrounding scopes but any variables declared in the inner scope are not accessible in the surrounding scopes. 

## Shadowing
Any variable declared inside a function scope with the same name as a variable in any surround scope will 'shadow' the outer scoped variable and make it inaccessible within the function scope of the variable with the same name.

## Closures
When a function is defined it retains access to, or "closes over", the variable scope currently in effect. Basically, a closure retains references to everything that is in scope when the closure is created, and retains those references for as long as the closure exists. The function can access those references wherever we invoke the Function. If the value of the variable changes the closure sees the change and always has access to the current value of the variable wherever the Function is invoked.

## Lexical Scoping
Javascript uses lexical scoping, whenever it tries to find a variable it searches the hierarchy starting with the local scope and moving outward toward the global scope, it stops when it finds the first matching variable.

This applies to both variable assignement and references.


### Adding Variables to the current scope
Two ways to add a variable to the current scope, either with the `var` keyword or
by using the arguments passed into a Function.

## Variable Assignment 
- uses lexical scoping for assignment
- if JS can't find a mathcing variable for assignment it will create a global variable. This can create subtle bugs.

# Hoisting

## Hoisting for variable declarations
- Javascript processes variable declarations before it executes any code within a scope. 
- it only "hoists" the declarations to the top of the scope not the assignments.

with hoisting, this code:
```
function hello() {
  var b = 'hello';
  return a;

  var a = 'world';
}

var a = 123;
var b = 456;

hello();      
```
is effectively the same as this code 
```
var a;          // hoisted to the top of the global scope
var b;

function hello() {
  var b;
  var a;        // hoisted to the top of the "hello" functional scope

  b = 'hello';

  return a;

  a = 'world';
}

a = 123;
b = 456;

hello();        // returns "undefined", not 123, since declaration of a is hoisted

```

Javscript also hoists Functions declarations (including the body of the function)

Functions expressions involve assigning a function to a declared variable; since such expresssions are just declarations they obey the hoising rules as well (the declaration is hoisted but the assignment is not)

## Best Practice to Avoid Hoisting Confusion
1. Always declare variables at the top of their scope 
2. Always declare functions before calling them.


# Javascript Errors
## Reference Error
  - a `ReferenceError` occurs when you reference a variable or function that doesnt exist;
```
a;           // Referencing a variable that doesn't exist results in a ReferenceError
a();         // The same is true of attempting to call a function that doesn't exist.
```

## Type Error 
  - a  `TypeError` usually occurs when you try access the property on a value that does not contain properties such as `null`;
  - trying to call something that isnt a function can also result in `TypeError`;
```
var a;       // a is declared but is empty as it has not been set to a value.
typeof(a);   // 'undefined'

a.name;      // TypeError: Cannot read property 'name' of undefined

a = 1;
a();         // TypeError: Property 'a' is not a function
```


## Syntax Error 
- `SyntaxError` will usually be thrown right when the program loads and before it begins to run, it is different than `ReferenceError` and `TypeError` in that it isnt dependant on variables and values at runtime, instead it recognizes the error solely from the text of your program;

## How to avoid Errors

### Use Guard Clauses
- simply by using a conditional statement we can ensure that the input meets certain criteria before running.

#### When to use Guard Clauses
- Guard Clauses are best to be used when you cannot trust that a functions arguments will be valid. Invalid arguments can have incorrect
types, structures, values, or properties. Usually your program should be able to trust itself to do the right thing; you should be able to trust that it always calls its methods with valid values. 

### Detecting Edge Cases 
- Most error prevention work stems from examining the assumptions inherent in your code.
  1. Find the where your program *could* violate your assumptions. These are called **Edge Cases**
    - These are called *Edge Cases* because they usually involve values at the extreme end of a possible range of values.
    - consider your code's input (functions take arguments, each data type has its own set of values that can cause undesired behavior)
  * example:
   If you code expects a number input, what happens if that number is negative? or zero? or a decimal value?
   If your code expects a string, what if the string contains only whitespace characters or special characters?

### Planning Your Code 
- It is impossible to think of every scenerio but you can plan ahead. When writing a new function write out some common use cases and see how your function handles them.
```var countries = ['Australia', 'Cuba', 'Senegal'];

alphaInsert(countries, 'Brazil');

console.log(countries.join(', '));         // Logs "Australia, Brazil, Cuba, Senegal"
```
now some edge cases
```
alphaInsert([], 'Brazil');                 // Inserting in an empty Array
alphaInsert(['Brazil'], 'Australia');      // At the beginning of an Array
alphaInsert(['Brazil'], 'Cuba');           // At the end of an Array
alphaInsert(['Brazil'], 'Brazil');         // Duplicate entry
```

### Catching Errors 
We can't always predict and stop errors from being thrown. Some built-in Javascript Functions can throw errors that it isnt possible to prevent but we can 'catch' the errors with a `try/catch/finally` block.
- the syntax looks very similar to an `if/else` block.
```
try {
  // Do something that might fail here and throw an Error.
} catch (error) {
  // This code only runs if something in the try clause throws an Error.
  // "error" contains the Error object.
} finally {
  // This code always runs, no matter if the above code throws an Error or not.
}
```
### **Only use `try/catch/finally` blocks when the following conditions are both true;
  1. a built-in Javascript Function or method can throw an Error and you need to handle or prevent that Error;
  2. a simple guard clause is impossible or impractical to prevent that error. 
