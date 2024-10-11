// const billy = 'Billy';
// const jennifer = 'Jennifer';
// const parry = 'Parry';
// const Geoffrey = 'Geoffrey';

const students = ['Billy', 'Jennifer', 'Parry', 'Geoffrey'];
//                   0          1         2         3

students.push(`Terrance`);
const newLength = students.push(`Jack`, `Jill`);
// console.log(newLength);

const jill = students.pop(); // Jill
students.pop(); // Jack
// console.log(jill);

const newestLength = students.unshift(`Anna`);
// console.log(students);

students.shift();
// console.log(students);

const bestStudents = students.slice(1);
// console.log(`OLD STUDENTS: `, students);

students.splice(2, 1, `Megan`, `Danny`);
// console.log(`NEW STUDENTS: `, students);

// console.log(`BEST STUDENTS:`, bestStudents);

// console.log(students.length);

// console.log(students[0]);




// for loops

const userInput = prompt(`Enter lucky numbers separated by commas`, `5,6,8,12,2`);

const luckyStrings = userInput.split(`,`);
console.log(`LUCKY STRINGS: `, luckyStrings);

const luckyNumbers = []; 

  //  initialization               condition              afterthought
for(  let index = 0;      index < luckyStrings.length; index = index + 1) {
  console.log(`INDEX: `, index);
  console.log(`LUCKY STRING: `, luckyStrings[index]);
  
  const luckyNumber = Number(luckyStrings[index]);
  luckyNumbers.push(luckyNumber);
}

console.log(`LUCKY NUMBERS: `, luckyNumbers);

// initialization (index = 0) -> condition (0 < 5) -> code block -> afterthought (index = 1) 
// condition (1 < 5) -> code block -> afterthought (index = 2) -> 
// condition (2 < 5) -> code block -> afterthought (index = 3 ) -> ...
// condition (5 < 5) -> stop the loop




// while loops

// // initialization
// let countDownNumber = 10;

// //        condition
// while(countDownNumber > 0) {
//   console.log(countDownNumber);

//   // afterthought
//   countDownNumber = countDownNumber - 1;
// }







// Scope

// const globalVariable = `GLOBAL`;
// const otherGlobalVariable = `OTHER GLOBAL`;

// const myFunc = () => {
//   const functionVariable = `FUNCTION VARIABLE`;
  
//   if(true) {
//     // console.log(functionVariable);
//   }

//   return functionVariable;
// }

// const value = myFunc();
// console.log(value);
// myFunc(otherGlobalVariable);
// myFunc(`Hello`);
// myFunc(`Goodbye`);

