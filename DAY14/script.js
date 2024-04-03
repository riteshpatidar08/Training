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

// function outerFunction() {
//   const outerVaribale = 'hello this is outer varibale';

//   function innerFunction() {
//     function thirdFunction() {
//       console.log(outerVaribale);
//     }
//     thirdFunction();
//   }

//   innerFunction();
// }
// outerFunction();

//asynchronous js 

console.log('hello')
setTimeout(()=>{
  console.log('console by settimeout after 3 sec')
},3000)
console.log('world')
console.log('bye')

setInterval(() => {
  console.log('set interval function run in every 3 sec')
}, 3000);


//callback function
function f1(callback){
  setTimeout(()=>{
    console.log(callback)
    console.log("this is function f1")
    callback()
  },2000)
}

function f2(callback){
  setTimeout(()=>{
    console.log("this is function f2") 
    callback()
  })
}
function f3(callback){
  setTimeout(()=>{
    console.log("this is function f3") 
    callback()
  })
}
function f4(callback){
  setTimeout(()=>{
    console.log("this is function f4") 
    callback()
  })
}
function f5(callback){
  setTimeout(()=>{
    console.log("this is function f5") 
    callback()
  })
}

f1(()=>{
  f2(()=>{
    f3(()=>{
      f4(()=>{
        f5()
      })
    })
  })
})

f1(f2())
// this is called callback hell
//the solution of callback hell is promise 
// promises is like a object which store the feature values of any asynchronous operation


function promisef1(){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      
      console.log('this is promise')
      resolve();
    })
  })
}
function promisef2(){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
     
      console.log('this is promise 2')
       resolve();
      
    })
  })
}

promisef1().then(()=> promisef2())













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
