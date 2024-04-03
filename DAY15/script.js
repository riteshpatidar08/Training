// hoisting 

console.log(myName)
debugger
var myName = "ritesh" 
console.log(myName)

sum();
const sum = (a,b) => {
    return a+b ;
}

debugger
sum2()
function sum2(a,b){
    return a+b
}