let str = 'Hello, world!';

//NOTE Methods for extracting parts of a string
//1 charAt
// console.log('char at method:', str.charAt(2));
// console.log(str.length);

//2 slice
// console.log(str.slice(1, 4));

//NOTE Methods for searching for a substring
// console.log(str.indexOf('l'));
// console.log(str.lastIndexOf('l'));
// console.log(str.includes('by'));

// console.log(str.startsWith('Hello'));
// console.log(str.endsWith('world!'));

//NOTE Methods for modifying a string

// console.log(str.replace('world', 'friend'));
// console.log(str) ;
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// console.log(str.concat(' Goodbye!'));

// //NOTE Methods for trimming whitespaces
// console.log('  hello, world!    '.trim());

// //NOTE other methods
// console.log(str.split(','));
// console.log(str.repeat(2));

// console.log(str.split('').reverse().join(''));

//Number methods

//NOTE Method 1: toFixed()
// const number1 = 3.14159;
// const roundedNumber1 = number1.toFixed(2);
// console.log(roundedNumber1);



//NOTE  Method 2: toPrecision()
// const number2 = 12345.6;
// const formattedNumber = number2.toPrecision(10);
// console.log(formattedNumber);

// //NOTE Method 3: toLocaleString()
// const number3 = 1234567.89;
// const localeString = number3.toLocaleString('en-US');
// console.log(localeString);

// //NOTE Method 4: Number.isNaN()
// console.log(typeof(NaN))
// console.log(Number.isNaN(value1));

// console.log(Number.isNaN(value2));
// is not a number 
// //NOTE Method 5: Number.parseInt()
// const stringNumber1 = '123';
// const parsedInt = Number.parseInt(stringNumber1);
// console.log(parsedInt);

// //NOTE Method 6: Number.parseFloat()
// const stringNumber2 = '3.14';
// const parsedFloat = Number.parseFloat(stringNumber2);
// console.log(parsedFloat);

// //NOTE Method 7: Number.MAX_SAFE_INTEGER
// console.log(Number.MAX_SAFE_INTEGER);

// //NOTE Method 8: Number.MIN_SAFE_INTEGER
// console.log(Number.MIN_SAFE_INTEGER);

// Date Object Methods

// Method 1: new Date()
const currentDate = new Date()
console.log(currentDate)

// Method 2: getDate()
const date = currentDate.getDate();
console.log('Date:', date);

// Method 3: getMonth()
const month = currentDate.getMonth();
console.log('Month:', month);

// Method 4: getFullYear()
const year = currentDate.getFullYear();
console.log('Year:', year);

// Method 5: getHours()
const hours = currentDate.getHours();
console.log('Hours:', hours);

// Method 6: getMinutes()
const minutes = currentDate.getMinutes();
console.log('Minutes:', minutes);

// Method 7: getSeconds()
const seconds = currentDate.getSeconds();
console.log('Seconds:', seconds);

// // Method 8: getMilliseconds()
// const milliseconds = currentDate.getMilliseconds();
// console.log('Milliseconds:', milliseconds);

// Method 9: toLocaleDateString()
const localeDateString = currentDate.toLocaleDateString();
console.log('Locale Date String:', localeDateString);

// Method 10: toLocaleTimeString()
const localeTimeString = currentDate.toLocaleTimeString();
console.log('Locale Time String:', localeTimeString);

// Math Object Methods

//NOTE Method 1: Math.abs()
const absoluteValue = Math.abs(-4.25);
console.log('Absolute Value:', absoluteValue);

// //NOTE Method 2: Math.round()
const roundedNumber = Math.round(4.2);
console.log('Rounded Number:', roundedNumber);

// //NOTE Method 3: Math.floor()
const floorValue = Math.floor(6.9);
console.log('Floor Value:', floorValue);

// //NOTE Method 4: Math.ceil()
const ceilValue = Math.ceil(3.2);
console.log('Ceiling Value:', ceilValue);

// //NOTE Method 5: Math.random()
const randomNumber = Math.random();
console.log('Random Number:', randomNumber);

// //NOTE Method 6: Math.max()
const maxNumber = Math.max(10, 20, 30);
console.log('Max Number:', maxNumber);

// //NOTE Method 7: Math.min()
const minNumber = Math.min(10, 20, 30);
console.log('Min Number:', minNumber);

//NOTE Method 8: Math.pow()
const powerResult = Math.pow(2, 3);
console.log('Power Result:', powerResult);

// //NOTE Method 9: Math.sqrt()
const sqrtResult = Math.sqrt(25);
console.log('Square Root Result:', sqrtResult);

//PI 
const piValue = Math.PI ;
console.log(piValue)

//dom

//hoisting , 
//pass by value and pass by reference
//execution context 
//closures
//call by value  
//asynchronous js
//oops
