//Function declaration - we define a function using the function keyword, giving it a name, optional parameters, and a body of code to execute.

//Example 1- simple function declaration without parameters

function hello()
{
    console.log("Good morning");
}
hello(); //called the function , it prints Good morning

//Example 2 -declaring variables inside the function and calling the function

function sum()
{
let a = 10;
let b =20;
let sum = a+b;
console.log("The sum is:"+sum);
}

sum();

//Example 3 -declaring variables outside the function and calling the function

let length = 100;
let breadth =60;

function rectangle()
{
console.log("Area of rectangle is:"+(length*breadth) +" "+"squarecm");
}
rectangle();

//Example 4  - find the date using function 

function timestamp()
{
  console.log(new Date().toDateString());
  console.log(new Date().toISOString());
}
timestamp();

//Example 5

let person_age = 24;
function voting()
{

if(person_age>=18)
{
console.log("Eligible to vote");

}
else {
    console.log("Not Eligible to vote");
}
}

voting();

//example 6 - Assigning function as a variable 

const date = function() {
  console.log(new Date().toString());
};
date();

//Example 7- calling a function before it is declared 

greet(); // Output: "Hello!"

function greet() {
  console.log("Hello!");
}

//Example 8 - calling child function in parent function

function child()
{
  console.log( Date().toString());
}

function  parent()
{
  console.log("This is for parent");
  child();
}
parent();

