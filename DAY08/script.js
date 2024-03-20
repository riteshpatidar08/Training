// //NOTE - ASSIGNMENT OPERATOR

// Assignment Operator (=)

// let x;
// x = 10; // Assigns the value 10 to variable x
// console.log(x)

// Addition Assignment (+=)
// let y = 5;
// y = y + 5;
//  console.log(y)
// y += 3; // Equivalent to: y = y + 3; (y is now 8)

// Subtraction Assignment (-=)
// let z = 10;
// z -= 4; // Equivalent to: z = z - 4; (z is now 6)

// Multiplication Assignment (*=)
// let a = 3;
// a *= 2; // Equivalent to: a = a * 2; (a is now 6)

// Division Assignment (/=)
// let b = 12;
// b /= 3; // Equivalent to: b = b / 3; (b is now 4)

// // Remainder Assignment (%=)
// let c = 10;
// c %= 3; // Equivalent to: c = c % 3; (c is now 1)

// // Exponentiation Assignment (**=)
// let d = 2;
// d **= 3; // Equivalent to: d = d ** 3; (d is now 8)

// console.log("x:", x);
// console.log("y:", y);
// console.log("z:", z);
// console.log("a:", a);
// console.log("b:", b);
// console.log("c:", c);
// console.log("d:", d);

//NOTE - COMPARISON OPERATOR

// // Equal to (==)
// console.log("Equal to operator (==)");
// let applesInBasket = 5;
// let orangesInBasket = 10;
// console.log(
//   "Are there equal number of apples and oranges?",
//   applesInBasket == orangesInBasket
// );

// Not equal to (!=)
// console.log("\nNot equal to operator (!=)");
// let userRole = "admin";
// let requiredRole = "admin";
// console.log(
//   "Is the user role different from the required role?",
//   userRole != requiredRole
// );

// // Strict equal to (===)
// console.log("\nStrict equal to operator (===)");
// let userInput = 5;
// let expectedInput = "5";
// console.log(
//   "Is the user input strictly equal to the expected input?",
//   userInput === expectedInput
// );

// // Strict not equal to (!==)
// console.log("\nStrict not equal to operator (!==)");
// let userStatus = "active";
// let bannedStatus = "banned";
// console.log(
//   "Is the user status strictly not equal to banned?",
//   userStatus !== bannedStatus
// );

// Greater than (>)
// console.log("\nGreater than operator (>)");
// let userAge = 21;
// let requiredAge = 21;
// console.log(
//   "Is the user old enough to purchase alcohol?",
//   userAge > requiredAge
// );

// // // Less than (<)
// console.log("\nLess than operator (<)");
// let productPrice = 25;
// let budget = 50;
// console.log(
//   "Is the product price less than the available budget?",
//   productPrice < budget
// ); // true

// Greater than or equal to (>=)
// console.log("\nGreater than or equal to operator (>=)");
// let userPoints = 100;
// let requiredPoints = 100;
// console.log(
//   "Does the user have enough points to unlock the feature?",
//   userPoints >= requiredPoints
// ); // true

// // Less than or equal to (<=)
// console.log("\nLess than or equal to operator (<=)");
// let itemQuantity = 5;
// let minimumQuantity = 10;
// console.log(
//   "Is the item quantity less than or equal to the minimum required?",
//   itemQuantity <= minimumQuantity
// ); // true

// //NOTE - LOGICAL OPERATOR

// Logical AND (&&)
// console.log("Logical AND operator (&&)");
// let isLoggedIn = true;
// let isAdmin = true;
// console.log("Is the user logged in and an admin?", isLoggedIn && isAdmin);

// Logical OR (||)
// console.log("\nLogical OR operator (||)");
// let isMember = true;
// let isPremium = false;
// console.log("Is the user a member or a premium user?", isMember || isPremium);

// Logical NOT (!)
// console.log("\nLogical NOT operator (!)");
// let hasPermission =false;
// console.log("Does the user not have permission?", !hasPermission);

// Combining logical operators

// console.log("\nCombining logical operators");
// let isStudent = true;
// let isEmployee = false;
// let hasAccess = isStudent && !isEmployee;
// console.log("Does the user have access?", hasAccess);

// // Using logical operators with comparison operators
// console.log("\nUsing logical operators with comparison operators");
// let age = 25;
// let isAdult = age >= 18 && age <= 60;
// console.log("Is the person an adult?", isAdult);

// Short-circuit evaluation
// console.log("\nShort-circuit evaluation");
// let result = true || (console.log("This won't be executed"), false);
// console.log("Result:", result);

// //NOTE - Operator precedence
// Arithmetic Operators
// let result1 = 10 + 5 * 2; // Multiplication has higher precedence than addition
// console.log("Arithmetic Operators:", result1);

// // // Logical Operators
// let result2 = true || false && true; // Logical AND has higher precedence than logical OR
// console.log("Logical Operators:", result2);

// // Comparison Operators
// let result3 = 10 > 5 === true; // Greater than has higher precedence than strict equality
// console.log("Comparison Operators:", result3);

// // Assignment Operators
// let num = 10;
// num += 5 * 2; // Multiplication has higher precedence than assignment  // num = num + 10
// console.log("Assignment Operators:", num);

// Grouping with Parentheses
// let result4 = (10 + 5) * 2; // Parentheses have the highest precedence, forcing addition before multiplication
// console.log("Grouping with Parentheses:", result4);

// let a = prompt("enter your first name")
// let b = prompt("enter your last name")

// alert(a + " " + b);

// strings and template literals

// let firstName = "Ritesh";
// let lastName = "Patidar";
// let fullName = "Hello" +  "  " + "I'm" + "  " + firstName + "  " + lastName + "!";
// let fullName = `Hello I'm
// ${firstName} ${lastName} !`
// console.log(fullName);

// //with using the template literals ;

// //ex2 multiline
// let message =
//   "This is a long message\n" +
//   "that spans multiple lines\n" +
//   "using traditional concatenation.";
// console.log(message);

// //NOTE - if else  condition

// let temperature = 25;

// if (temperature >= 30) {
//   console.log("It's a hot day!");
// } else if (temperature >= 20 && temperature < 30) {
//   console.log("It's a pleasant day.");
// } else {
//   console.log("It's a cold day.");
// }

// //Note  = age,transaction

// //Note = Interaction function

// //Note = prompt , alert

// Note = truthy and falsy values

//truthy values  = !0 or !'' ;
//falsy values = '' , 0 , undefined , null , NaN ;

// let haveMoney = '';

// if (haveMoney) {
//     console.log('you are rich')
// } else {
//     console.log("you are poor")
// }


// Note = statement and expression

//ternary operator
//  condition ? if true this will run : else this will run

// let age = 20;
// let status2 = (age >= 18) ? "Adult" : "Minor";
// console.log(status2);

//difference between == and === ?
let num = 10;

let datatypeNum = typeof num;

let strNum = "10";

let dataTypeStrNum = typeof strNum;

console.log(dataTypeStrNum, datatypeNum);

// === working behind the scene
// checking the values and also data type of the variables

if (dataTypeStrNum === datatypeNum) {
  console.log("both are equal");
} else {
  console.log("both are not equal");
}

//loose equality = not check the data types of the varibales

//strict = always check the data type of the variables

// Loose equality (==) comparison
console.log(`Loose equality comparison (==):`);
console.log(`${num} == ${strNum}: ${num == strNum}`);

// Strict equality (===) comparison
console.log(`Strict equality comparison (===):`);
console.log(`${num} === ${strNum}: ${num === strNum}`);

//switch statement

// let grade = "B";
// let gradeDescription;

// if (grade === "A" || grade === "B") {
//   gradeDescription = "Excellent";
// } else if (grade === "C") {
//   gradeDescription = "Good";
// } else if (grade === "D") {
//   gradeDescription = "Fair";
// } else if (grade === "F") {
//   gradeDescription = "Poor";
// } else {
//   gradeDescription = "Invalid grade";
// }

// // console.log(`The grade "${grade}" is ${gradeDescription}`);

// //swtich statement
let grade = "B";
let gradeDescription;

switch (grade) {
  case "A":
  case "B":
    gradeDescription = "Excellent";
    break;
  case "C":
    gradeDescription = "Good";
    break;
  case "D":
    gradeDescription = "Fair";
    break;
  case "F":
    gradeDescription = "Poor";
    break;
  default:
    gradeDescription = "Invalid grade";
    break;
}

console.log(`The grade "${grade}" is ${gradeDescription}`);

// //TODO - task
let fruit = "apple";
let fruitColor;

if (fruit === "apple" || fruit === "cherry" || fruit === "strawberry") {
  fruitColor = "red";
} else if (fruit === "banana") {
  fruitColor = "yellow";
} else if (fruit === "orange") {
  fruitColor = "orange";
} else {
  fruitColor = "unknown";
}

console.log(`The color of ${fruit} is ${fruitColor}`);

// //strict mode

// // NOTE  TASK
// //TODO TASK 1 - User Authentication:
// Prompt the user to enter their username and password.
// Use logical AND (&&) to check if the username is "admin" and the password is "admin123".
// If both conditions are true, display "Authentication successful". Otherwise, display "Authentication failed".

// let username = prompt("enter username");
// let password = prompt("enter password");

// if (username == "admin" && password == "admin123") {
//   alert("authenticaltion successful");
// } else {
//   alert("authentication failed");
// }

// //Todo Task 2
// // Access Control:
// Prompt the user to enter their role (admin or user) and age.
// Use logical OR (||) to check if the role is "admin" or the age is 18 or above.
// If either condition is true, display "Access granted". Otherwise, display "Access denied".
z;

// //TODO - task 3
// // Product Discount:
// Ask the user if they are a premium member (yes/no) and if they are a student (yes/no).
// Use logical NOT (!) to check if the user is not a premium member and not a student.
// If the user is neither a premium member nor a student, inform them that they get a discount of 10%. Otherwise, inform them that they do not qualify for a discount.

// let inputUser1 = prompt("You are student");
// let inputUser2 = prompt("you have premium ");

// if (inputUser1 != "yes" && inputUser2 != "yes") {
//   alert("You got 10% discount");
// } else {
//   alert("sorry! you can't get any discount");
// }

// //TODO - task 4
// // Membership Eligibility:

// Prompt the user to enter their age and employment status (employed/unemployed).
// Use logical AND (&&) to check if the age is between 18 and 60 (inclusive) and the user is employed.
// If both conditions are true, inform the user that they are eligible for membership. Otherwise, inform them that they are not eligible.

// //TODO -  task 5
// // Shipping Eligibility:

// Ask the user for their order total amount and if they are a premium member (yes/no).
// Use logical OR (||) to check if the order total is greater than or equal to $50 or the user is a premium member.
// If either condition is true, inform the user that they are eligible for free shipping. Otherwise, inform them that shipping charges apply.

// // Todo String literals
