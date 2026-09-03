//global scope -A global variable refers to a variable that is declared outside any function or block, so it can be used anywhere in the program, both inside functions and in the main code.

//Example 

const a = 10;  // This variable is in the global scope

function displaynum() {
  console.log("Inside function: " + a);  // Accessing the global variable inside a function
}

displaynum(); 
console.log("Outside function: " + a); // Accessing the global variable inside a function

//Example

const b = 10;  // This variable is in the global scope

function displaynum() {
    const b=20;
  console.log("Inside function: " + b);  // 20 Accessing the global variable inside a function
}

displaynum(); 
console.log("Outside function: " + b); //10



//Example  

var v = 10;  // This variable is in the global scope

function displaynum() {
    const v=20;
  console.log("Inside function: " + v);  // 20 Accessing the global variable inside a function
}

displaynum(); 
console.log("Outside function: " + v); //10

//Example 

var y = 10;  // This variable is in the global scope

function displaynum() {
    var y=20;
  console.log("Inside function: " + y);  // 20 Accessing the global variable inside a function
}

displaynum(); 
console.log("Outside function: " + y); //10

//A B C or AA BB CC asi code 

