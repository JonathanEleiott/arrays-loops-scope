# Arrays, Loops, and Scop

## Arrays - hold multiple values

- use square brackets and separate each value with commas
- [`carrots`, `cucumbers`, `tomatoes`, `beets`]
- [1, 3, 5, 7, 2, 12, 45]
- [`hello`, 54, true, 23, `goodbye`]
- use indexes starting at 0 to decide where items are at in the array

## Array Manipulation - use ARRAY METHODS to add/edit/delete from the array

- put a dot after the array name followed by the method
- push -> adds to the end of an array and returns the new length
- pop() -> removes the last element in an array
- unshift -> adds to the beginning
- shift -> removes from the beginning
- slice -> makes a copy of a portion of the array
- splice -> add/edit/delete from an array

## Array Properties and Access

- length -> how many items are in the array
- access an index -> arrayName with square brackets and index number between the brackets
  - arrayName[indexNumber]

## Convert to Array from String

- stringVariable.split -> turns a string into an array

## Loops - go through each value and then do something repeatedly

- for loops -> go through a block of code a set number of times
  - for(initialization; condition; afterthought) { what you want to do }
  - initialization -> executed one time before the code starts looping
  - condition -> defines the condition for continuing to execute the code block
  - afterthought -> executed after each iteration of the loop
- while loops -> go through a block of code while a certain condition is true
  - while(condition) { code here }
- BE CAREFUL! This can lead to an infinite loop if the condition is never met

## Scope - when/where can I use a variable

- Where is a variable can be used is based on where it is defined
- A variable can be used if it is defined at an equal or higher level
  - Global (highest) -> variable will be available anywhere
  - Functional -> variable can be used within the function
  - Block (lowest) -> variables can be used within the curly braces

