// optional chaining (?)

const info = {
  id: 1,
  firstName: 'Ritesh',
  address: {
    street: {
      houseNo: 43,
      lane: 'abc',
    },
    state: 'rajasthan',
    city: 'udaipur',
  },
};
//if we access a property in the object which is not available then it will show error and our code execution get stopped .
//if we use the optional chaining (?) it gives us undefined and our code will execute
console.log(info.street?.state);
// with optional chaining

// console.log(info.street?.state);

let value = 5;
console.log(value);

//NOTE -  OBJECTS properties
//object.keys
const booking = {
  trainNo: 12345,
  passengerCount: 3,
  passengerName: ['a', 'b', 'c'],
};

const keys = Object.keys(booking);
// keys = ['trainno', 'passengerCount' , 'passengerName']
keys.forEach(function (element) {
  console.log(element);
});
// console.log(keys) ;

//object.values

const values = Object.values(booking);
// console.log(values) ;

//object.assign
//to add two objects
const booking2 = {
  departureDate: '12-05-2024',
};

const addBothObject = Object.assign(booking, booking2);
// console.table(addBothObject)
//object.entries
//important to loopover object with keys and values
const entries = Object.entries(booking);
console.log(entries);
for (const [key, value] of entries) {
  console.log(`${key} : ${value}`);
}

//delete properties from object ;

console.log(delete booking.passengerName);
console.log(booking);

//Remaining array methods

//slice
//donot modify the original array
const companies = [
  'apple',
  'samsung',
  'google',
  'meta',
  'microsoft',
  'netflix',
  'amazon',
  'ibm',
  'infosys',
  'ibm',
];

console.log(companies.slice(1, 5));
console.log(companies);

//splice
// modify original array
console.log(companies.splice(1, 0, 5, 7));
// splice(start, numberof elements to delete , elements to add)
console.log(companies);

//reverse
// to reverse an array
//modify the original array
console.log(companies.reverse());
console.log(companies);

//concat
const companies2 = ['accenture'];
const companies3 = companies.concat(companies2);
console.log(companies3);

// lastIndexOf
// give us last index of the repeated value

const num = [1, 2, 4, 7, 4, 8];
console.log(num.lastIndexOf(4));

//Data transformation
//map
//perform the transform operation in the callback and returns new array
// most important method in the array

const mappedArray = num.map((e) => e * 4);

console.log(mappedArray);
console.log(num);

//filter
const filteredArray = companies.filter((e) => e === 'ibm');
console.table('filteredarray', filteredArray);
console.log('companies', companies);
//reduce
const num2 = [1, 2, 4, 7, 4, 8];
const reduceArray = num2.reduce((accumulator, currentIndex) => {
  console.log(accumulator, currentIndex);
  return accumulator + currentIndex;
}, 0);
console.log(reduceArray);

//find
const findArray = companies.find((e) => e === 'ibm');
console.table(findArray);
console.log('companies', companies);
//some
const someArray = companies.some((e) => e ==='ibm');
console.log(someArray);
//sort
//modify original array
const descendingOrder = num2.sort((a, b) => b - a);
console.log(descendingOrder);
const ascendingOrder = num2.sort();
console.log(ascendingOrder);
// console.log(num2) ;

//forEach

//Task 

// Create an object of a user with properties like firstName, lastName, and age. Add a method called formatInfo() that formats and returns the user's information as a string, such as "Ram, is 27 years old".

// TODO - Array Destructuring Tasks
// Task: Swap Variables
// Swap the values of two variables using array destructuring.
let ab = 10 ;
let ba = 30 ;
[ab , ba] = [ba , ab]
console.log(ab, ba)
// Task: Extract First and Last Element
// Extract the first and last elements of an array using array destructuring.
// const  [a, , , b]  = [1,2,3,4]
// Task: Ignore First Element
// Ignore the first element of an array and extract the rest using array destructuring.

//splice method : 
//use the splice method in a array to add two elements at the index 2 ;

//slice method 
//use the slice method to get the item between index (2,5) ;

//map method 
//use the map method to transform a array in a table of 6 ;

//create a object and loopover the keys and values of that object
