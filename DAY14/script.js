// scope and scope chain

//global scope
//function scope
//block scope
// const ab = 5; //global scope
// if (true) {
//   var firstName = 'hello';
//   let lastName = 'bye'; //variable declare inside the block is block scope
//   console.log(ab)
// }
// console.log(firstName);
// console.log(lastName);

//scope chain 

function outerFunction(){
    const outerVaribale = 'hello this is outer varibale'

    function innerFunction(){
        function thirdFunction(){
            console.log(outerVaribale)
        }
        thirdFunction()
    }

    innerFunction()
}

outerFunction()


//hoisting
// console.log(myVar);
// var myVar = 'I am hoisted!';
// console.log(myVar);

//closure
// function outerFunction() {
//     const outerVariable = 'I am from outerFunction';

//     function innerFunction() {
//         console.log(outerVariable);
//     }

//     return innerFunction;
// }

// const myClosure = outerFunction();
// myClosure();

//timers

//settimeout

//setinterval

//asynchronous operation

// function asynctask(){
//     return new Promise((resolve ,reject)=>{
//         setTimeout(()=>{
// resolve("promise is resolved")
//         },3000)
//     })
// }

// asynctask().then((response)=>{
//     console.log(response)
// })

//ASYNC AWAIT

// function AsyncTask() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = Math.random() < 0.8;
//       if (success) {
//         resolve('Task completed successfully');
//       } else {
//         reject(new Error('Task failed'));
//       }
//     }, 2000);
//   });
// }

// AsyncTask()
//   .then((result) => {
//     console.log('Task result:', result);
//   })
//   .catch((error) => {
//     console.error('Error:', error.message);
//   });

// // Async function using await
// async function performTask() {
//   try {
//     console.log('Task started...');
//     const result = await simulateAsyncTask();
//     console.log('Task result:', result);
//   } catch (error) {
//     console.error('Error:', error.message);
//   }
// }

// performTask();

// Select parent element
const parentElement = document.getElementById('parent');
console.log(parentElement);

const newElement = document.createElement('p');
console.log(newElement);
newElement.textContent = 'new paragraph added using js';

parentElement.appendChild(newElement);
//  created the paratag <p></p>
//now i have to add the content inside the paratag

// // Create another new element
// const anotherNewElement = document.createElement('p');
// anotherNewElement.textContent = 'Another New Paragraph';

// // Insert the new element before the second paragraph
// const secondParagraph = document.getElementById('second');
// parentElement.insertBefore(anotherNewElement, secondParagraph);

// // Prepend a new element to the parent
// const yetAnotherNewElement = document.createElement('p');
// yetAnotherNewElement.textContent = 'Yet Another New Paragraph';
// parentElement.prepend(yetAnotherNewElement);
