'use strict';

//NOTE - OBJECTS METHODS

// let myDetails = {
//     firstName : "Ritesh" ,
//     lastName : "patidar",
//     age : 2024 - 1997 , 
//     //the function we used in the object is called methods 
//     retirement : function(){
//         console.log(this)
//         return 65 - this.age ; 
//     }
// }

// dot notation 
// console.log(myDetails.firstName) ;
// console.log(myDetails.retirement())
// //bracket notation 
// console.log(myDetails['firstName'])

//to update the property values :

// myDetails.firstName = "Ram"

// console.log(myDetails)

// let ask = prompt("hello what you want to know about me firstName , lastName , age") ;
// ask = 'age'
// //used bracked notation to get the value from the mydetails object
// if(myDetails['age']) {
//     alert(myDetails['age'])
// }else {
//     alert('details not found')
// }





















//NOTE -  LOOPS




// while
// const numbers = [1, 2, 3, 4, 5];
// let i = 0;

// while (i < numbers.length) {
//   console.log(numbers[i]);
//   i++;
// }


//NOTE  - Destructuring arrays
// const arr = [1,2,3,4,5] ;
// const a = arr[0] ;
// const b = arr[1] ;
// const c = arr[2] ;
// console.log(a)


// Assigning values from an array to variables
// const  [a,b,c , ,d] = [1,2,3,4,5]  
// console.log("🚀 ~ file: script.js:80 ~ c:", c);
// console.log("🚀 ~ file: script.js:80 ~ b:", b);
// console.log("🚀 ~ file: script.js:80 ~ a:", a);
// console.log(d)
// const  [e,f,g] =  arr ;  
  

//Swapping values of variables:


// Assigning default values:
// const [a , b=2]  = [1] ;
// console.log(a ,b)


// Skipping values:

// Destructuring function parameters:

// function add([a,b ,c]){
//     console.log(a,b,c)
//     return a + b + c
// }  

// console.log(add([1,2 , 3])) ;

// function add2([a,b]){
//     // const a = num[0] ;
//     // const b = num[1] ;
//     return a + b ;
// }

// console.log(add2([1,2]))
//nested array

// const arr2  = [2,3,4,[5,6],7] ;

// const [a,b,c ,[d,e], f]  = arr2 ;

// console.log(a,b,c,d,e,f)


//NOTE - Destructuring Objects
let myDetails = {
  firstName: 'Ritesh',
  lastName: 'patidar',
  age: 2024 - 1997,
};

const {firstName:fName , lastName , age , job='developer'} = myDetails ;
console.log(fName , lastName , age , job)

// Assigning values from an object to variables:
// Assigning values with different variable names:
// Assigning default values:
// Nesting destructuring:
// Destructuring function parameters:

//NOTE - Spread Operator(...)
//concatenating array
// const fruits = ['apple' , 'mango' , 'grapes'] ;
// console.log(...fruits)
// const fruit2 = ['watermelon' , ...fruits]
// console.log(fruit2)


// Copying an array:
const arr1 = [1,2,3]
const arr3 = [...arr1]
console.log(arr1);
console.log(arr3) ;

const fruits = ['mango' , 'apple']
const vegetables = ['potato' , 'tomato']
const groceryItems = [...fruits , ...vegetables]
console.log(groceryItems)
//Passing elements as function arguments:

const number = [1,2] ;

function add(a,b) {
    return a + b ;
}

console.log(add(...number));

// ...number = 1 , 2


// objects
// Copying an object:
// Concatenating object:
// Adding or updating properties:

//NOTE - Rest Patterns

//NOTE - The for of loop

//NOTE - for in
// to loopover object
//NOTE - Enhanced Object Literals
// Shorthand property names:
// Computed property names:
// Method shorthand:

// NOTE - Optional Chaining (?.)


//NOTE -  OBJECTS properties 

//object.keys
//object.values
//object.assign
//object.entries
// Object.freeze(): Freezes an object: other code can't delete or change its properties.
// Object.seal(); //cannot add new properties can change existing one ;
//delete properties from object ;









//NOTE STRING AND METHODS












































// TODO - Array Destructuring Tasks
// Task: Swap Variables
// Swap the values of two variables using array destructuring.

// Task: Extract First and Last Element
// Extract the first and last elements of an array using array destructuring.

// Task: Ignore First Element
// Ignore the first element of an array and extract the rest using array destructuring.
