//Arrow function -shorter syntax for function expressions.
//You can skip the function keyword, the return keyword, and the curly brackets:

//Example1
const add = (a, b) => a + b;
console.log(add(5, 3));

//Example
const addition = (a, b) => {
    a + b;
}
console.log(addition(5, 3)); //undefined as used curly braces {} without a return statement.

//Example2 to check errors
const demo1= (x, y) => { x * y };
console.log(demo1(2,3)); //undefined as it is curly braces without return

//const demo2 = (x, y) => return x * y; 
//console.log(demo2(2,3)); //undefined as it has return without curly brace

const demo3 = (x, y) => { return x * y };
console.log(demo3(2,3)); //6


//Example 3

const demo = () => {
    console.log( "Hi My name is swarna!" );
}
demo();

//Example 4 - Arrow Function with Multiple Parameters

const multiply = (a, b,c) => 
    {
     console.log(a * b *c);
    }
multiply(5, 3,2);

//Example 5 -Arrow Function with Default Parameters

const additions = (a, b,c=20) => 
    {
     console.log(a + b +c);
    }
additions(5, 15);

//Example 6 - -Return Object Literals

const person = (firstName, lastName) => ({first: firstName, last: lastName});
console.log(person("Swarnalipi", "Behera"));

//Example 7 Check even and odd

const checkEven = (num) =>
{
if (num%2 === 0)
{
    return "Even";
}
else 
{
     return "Odd";
}
}

console.log(checkEven(24));
console.log(checkEven(67));

//Example8  hoisting 

hello(); // ReferenceError

const hello = () => "Hello";

// Example -9 Using filter() with arrow function 

let number = [1,2,3,4]
let c = number.filter((num) =>num%2 === 0);
console.log(c);

//Example 10 Using map() with arrow function

let numbers =[1,2,3,4]
let d = numbers.map((num) =>num*4);
console.log(d);

//single line arrow function , no parameters , arrow function with async

//Example 11 single line arrow function

const m = (a, b) => a * b; //it won't print anything without console

//Example 12 of arrow function without parameter

const getNumber = () => 10;
console.log(getNumber());

const greet = () => {
    console.log("Good morning")
};
greet();

//Example 13 of arrow function with  one-line /no parameters async 

const message = async () => "Hello world";

//Example of basic arrow function with  async

const test = async () => { //async always returns a promise
return "Hello";

};

test().then((result) => {
console.log(result);
});

//Example of arrow function with parameters and using await

const user = async (name) => 
{
    return `Hello, ${name}! `;
};

const result = await user("Swarna");
console.log(result);

user();

//or

const user1 = async (name) => `Hello, ${name}!`;

user1("Alice").then(message => console.log(message));

//Example of arrow function with error handling

const login = async () => {
try{
    console.log("Logging in ...")
    throw new Error("Login failed")
}
catch (error) 
{
    console.log(error.message);
}

finally
{
    console.log("login process finished");
}
};

login();