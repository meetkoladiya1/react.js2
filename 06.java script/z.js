//  ----->>>>> 1 <<<<<-----
// write a javascript program function to check if a given string is a palindrome or not.

// function checkPalindrome(string) {
//     const len = string.length;
//     for (let i = 0; i < len / 2; i++) {
//         if (string[i] !== string[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }
// const string = prompt('Enter a string: ');
// const value = checkPalindrome(string);
// console.log(value);



//  ----->>>>> 2 <<<<<-----
// write a javascript program to find the maximum number in an array.

// function largest(arr) { 
//     let i; 
//     let max = arr[0]; 
//     for (i = 1; i < arr.length; i++) { 
//         if (arr[i] > max) 
//             max = arr[i]; 
//     } 
//     return max; 
// } 
// let arr = [22, 65, 1, 39, 346]; 
// console.log("Largest in given array is " + largest(arr));



//  ----->>>>> 3 <<<<<-----
// write a javascript function that accepts a string as a parameter and finds the longest word within the string.

// function longest(str) {
//     str = str.match(/[a-zA-Z0-9]+/g);
//     let largest = "";
//     for (let i = 0; i < str.length; i++) {
//         if (str[i].length > largest.length) {
//             largest = str[i];
//         }
//     }
//     return largest;
// }
 
// console.log(longest("Hello guys this is geeksforgeeks where" + " students learn programming"));




//  ----->>>>> 4 <<<<<-----
// what are undeclared and undefined variables?

// Undefined: It occurs when a variable has been declared but has not been assigned any value. Undefined is not a keyword. 
// Undeclared: It occurs when we try to access any variable that is not initialized or declared earlier using the var or const keyword.



//  ----->>>>> 5 <<<<<-----
// which keywords are used to handle exceptions?

// JavaScript handles exceptions through the “try..catch…finally” statement.



//  ----->>>>> 6 <<<<<-----
// what is the unshift method in javascript ?

// The unshift() method is a built-in function in JavaScript that allows you to add one or more elements to the beginning of an array. This method can greatly simplify your code, making it more efficient and easier to read.



//  ----->>>>> 7 <<<<<-----
// what is the 'strict' mode in javascript and how can it be enabled

// The "use strict" directive enables JavaScript's strict mode. JavaScript's strict mode was introduced in ECMAScript 5. It enforces stricter parsing and error handling on the code at runtime. It also helps you write cleaner code and catch errors and bugs that might otherwise go unnoticed.



//  ----->>>>> 8 <<<<<-----
// what are the important javascript array methods examples?



//  ----->>>>> 9 <<<<<-----
// what are the different types of errors in javascript?

// what are the different types of errors in javascript?
// There are 7 types of JavaScript errors: Syntax error, Reference Error, Type Error, Evaluation Error, RangeError, URI Error and Internal Error.



//  ----->>>>> 10 <<<<<-----
var a = "hello";
var sum = 0;
for(var i = 0; i < a.length; i++ ) {
    sum += (a.charCodeAt(i) - 'a'.charCodeAt(0));
}
console.log(sum);
//  output = 47



//  ----->>>>> 11 <<<<<-----
const obj1 = { Name: "Hello", Age: 16 };
const obj2 = { Name: "Hello", Age: 16 };
console.log(obj1 === obj2);
// output = false



//  ----->>>>> 12 <<<<<-----
function show(...args) {
    let sum = 0;
    for(let i in args)
        sum += args[i];
    console.log("Total is: ", sum);
}
show(40,11,5);
// output = Total is: 56



//  ----->>>>> 13 <<<<<-----
// let a = [11,22,33,44];
// let b = [...a];
// b.push(66);
// console.log(a.length === b.length);
// output = Uncaught SyntaxError: Identifier 'a' has already been declared



//  ----->>>>> 14 <<<<<-----
var fruits = ["apple", "mango", "watermelon", "orange"];
var fruits_len = fruits.map((ele) => ele.length);
console.log(fruits_len);
// output = [5, 5, 10, 6]



//  ----->>>>> 15 <<<<<-----
let chars = ['A', 'B', 'A', 'C', 'B'];
let uniqueChars = [...new Set(chars)];
console.log(uniqueChars);
// output = ['A', 'B', 'C']