// 'use strict';

//NOTE -Types OF console
// Standard output
// console.log("Hello, World!");
// Error message
// console.error("Oops! Something went wrong.");

// Warning message
// console.warn("This is a warning message.");

// Informational message

// Please Check the use case of the both
//TODO - task
// console.log('This is an informational message.');
// console.info("This is an informational message.");

// Assertion message (only logs if the assertion is false)
// console.assert(5 > 10, "5 is not greater than 10.");
// console.assert(10 > 5, "10 is not greater than 5.");

// Object inspection
// Example object with nested properties
// let person = {
//   name: "Ritesh",
//   age: 27,
//   address: {
//     city: "Jaipur",
//     zipCode: "302033"
//   },
//   hobbies: ["Reading",  "Hiking"]
// };

// // Logging the object using console.dir()
// console.dir(person);

// Tabular data
// let data = [
//   { name: 'Ritesh', age: 30, city: 'New York' },
//   { name: 'Utsav', age: 25, city: 'Los Angeles' },
//   { name: 'Aman', age: 35, city: 'Chicago' },
// ];

// Logging data in tabular format
// console.table(data);
// console.log(data); // Logs a table with the data

// Grouped messages
// console.group('Group');
// console.log('Message 1');
// console.log('Message 2');
// console.groupEnd();

// Counting occurrences
// console.count("Counter");
// console.count("Counter");
// console.count("Counter");

// Execution time measurement
// console.time('Timer');
// // Some code to measure
// for (let i = 0; i < 1000000000; i++) {
//   Math.sqrt(i);
// }
// console.timeEnd('Timer');

//NOTE - USE STRICT MODE ;

// myName = 'ritesh';
// console.log(myName);

// function add(a, a, b) {
//   return a + a + b;
// }

// const sum = add(2, 3, 4);
// console.log(sum);


//NOTE FUNCTIONS ;


//function declaration


// console.log(fullName('Ritesh', 'Patidar'))

// function fullName(firstName, lastName) {
//     return `My name is ${firstName} ${lastName}`;
    
// }



//NOTE FUNCTION DECLARATION AND FUNCTION EXPRESSION  ;
//function expression
// console.log(add2(4, 5));

// const add2 = function (a ,b) {
//     return a + b;
// }
// console.log(add2) //without calling
// console.log(add2(2,4))  //with calling


//NOTE - ARROW FUNCTIONS

//shorter Format to write the functions in the javascript ;




//NOTE Arrow function
// const fullName = firstName => `${firstName}`;

// console.log(fullName('Ritesh', 'Patidar'));
//Normal function expression


// const add = function (a, b) {
//     return a + b;
// }

// const add = (a, b) => {
//     return a + b;
// }

// console.log(add(4,5))

//NOTE - FUNCTION CALLING ANOTHER FUNCTIONS

// function greet() {
//     return 'hello';
// }

// function greetMsg() {
//     return greet() +  " " + 'ritesh';
// }

// console.log(greetMsg())


// NOTE - ARRAYS NON PRIMITIVE DATATYPES
// const fruit1 = 'mango';
// const fruit2 = 'grapes';
// const fruit3 = 'apple';
// to make an array

// const fruits = ['mango', 'grapes', 'apple'];
                //    0   ,     1    ,  2
                   
                    // to access the array items
// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])

// const fruits2 = new Array('mango', 'grapes', 'watermelon')
// console.log(fruits2)

// const fruits3 = [];
// fruits3.push('mango')
// fruits3.push('grapes')
// fruits3.push('watermelon')
// console.log(fruits3);
//creating the array
//value of the different types
// const fruits = ['mango', 'apple', 'grapes'];

//NOTE - METHODS OF THE ARRAY ;
//pop //push //shift //unshift //indexOF //includes

// console.log(fruits3.indexOf('grapes'))
// console.log(fruits3.indexOf('apple'))

// console.log(fruits3.includes('grapes'))


//TODO - tasks
// pop():

// Task 1: Create an array of fruits. Use the pop() method to remove the last element from the array. Print the removed element and the modified array.

// push():

// Task 1: Create an empty array. Use the push() method to add three numbers to the array. Print the array after each addition.

// shift():

// Task 1: Create an array of colors. Use the shift() method to remove the first element from the array. Print the removed element and the modified array.

// unshift():

// Task 1: Create an array of animals. Use the unshift() method to add a new animal to the beginning of the array. Print the modified array.

// indexOf():

// Task 1: Create an array of numbers. Use the indexOf() method to find the index of a specific number in the array. Print the index.

// includes():

// Task 1: Create an array of cities. Use the includes() method to check if a specific city is present in the array. Print the result.
// Task 2: Create an array of programming languages. Use the includes() method to check if a particular language is supported by a web browser. Print the result


//NOTE - OBJECTS ;
// DOT BRACket notation
// object methods
// adding new properties


//normal object delaration
const myDetails = {
    firstName: 'Ritesh',
    lastName: 'Patidar',
    friends : ['a' , 'b' , 'c'] ,
}

//To access the values inside the myDetails
// 1st method dot notation

//2nd method bracket notation
console.log(myDetails['firstName'])  
console.log(myDetails.friends[1]);