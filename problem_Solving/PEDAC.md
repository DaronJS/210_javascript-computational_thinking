# The 'PEDAC' Problem Solving Process
- Problem (understand the problem)
- Examples (test cases/edge cases)
- Data Structures/ Algorithms
- Code 

In the PEDAC process, writing code is step #5. All the steps before that ensure that you have a good understanding of what the problem is, and help you design a blueprint for the solution. An analogy we often use is writing an essay. You don't immediately start writing the first sentence of the first paragraph, but instead take the time to understand the requirements, produce an outline, and think what you want to convey in the essay.

Small Code Challenge Problems
  - 20 - 45 minutes
  - typical solutions: 10-40 LOC
  - used extensively in interviews for a reason
    - mastery on a language
    - logic / reasoning
    - communications
  - not a skill that you "acquire and file away", but needs a lot of practice

Understand the Problem
  - requirements are explicit
    - take notes
  
  - requirements are not so explicit and need to be modeled
    - examples need to be described in computational words
 
  - implicit knowledge needs to be captured
    - convert to explicit rules, in computational language

  - identifying and defining important terms and concepts
 
  - ask questions to verify your understanding!

Examples / Test Cases
  - Input / Output
  - Test cases serve two purposes:
    - help you understand the problem
    - allow you to verify your solution
  - happy paths
    - combination of requirements; the "obvious" result
  - Edge cases
    - focus on input
    - emptiness (nil/null, "", [], {})
    - boundary conditions
    - repetition / duplication
    - data types
  - Failures / Bad Input
    - raise exceptions / report errors
    - return a special value (nil/null, 0, "", [] etc)
  - ask questions to verify your understanding!
  - General rules to come up with good test cases:
    - input types: can the function handle different input types such as numbers, strings, bools, objects?
    - special values:
      - if its a string does it work with an empty string? ('')
      - if its a number does it work with zero, negative nums or fractional nums?
      - if its an array does it work with an empty array?
    - valid/invalid inputs:
      - what should be considered invalid and what should be done with it? 
    - cover requirements identified in the first step of understanding the problem!!
      - look for the word if in your requirements this usually requires test cases 


  Data Structure
  - input data
  - rules/requirements as data
    - hash / object

  - string, array, hash/object, number
    - string
      - concact, strip, reverse, etc
      - Regular Expression! split, replace, match...
    - array
      - need to walk through it (iteration)
      - index
      - abstractions!!
        - map
        - reduce
        - select/filter
        - all
        - ...
    - hash/object
      - lookup table / dictionary
      - partition data for more efficient access downstream
      - digest
    - number
      - math operations
      - number as string may have advantage over numbers
  - compound data structures
    - array of arrays
    - hash with array/object values, etc

Algorithm
  - Algorithms have to be described in the language of chosen data structure!
    - "then solve it" doesn't count
  - Have to be really fluent with
    - String / Regex
    - Array
      - Ruby: Enumerable
      - JavaScript: Higher-Order Functions
    - Hash / Object
      - Creation (default values)
      - Access (default values)
      - Iteration
  - verify your algorithm with your examples / test cases