//Try...Catch Statements - It allows you to "try" a block of code and "catch" any errors that happen during its execution.

//Example1

try {

  let result = 10/0;
  console.log(result);
} 
catch (error) {

console.log("Something went wrong", error.message);

}

//Example 2

let num = 1;
try {
  num.toUpperCase();
} catch(error) 
{
  console.log(error.message)
}


//Example 

try{
  let user = null;
  console.log(user.name);
}
catch(error)
{
  console.log("Error message:",error.message); //Error message: Cannot read properties of null (reading 'name')
}

//Example 

try{
  let user = JSON.parse("invalid json");//syntax error
  console.log(user);
}
 catch (error)
 {
  console.log("error message:",error.message);
 }



//Example3
try {
  // This function does not exist, so it throws an error
  nonExistentFunction(); 
  console.log("This line will never run.");
} catch (error) {
  console.log("An error occurred!");
  console.error("Error message:", error.message); 
}

console.log("The script keeps running perfectly!");

//Example4 using throw to Create Custom Errors
//use the throw keyword to manually generate your own errors based on specific conditions (like bad user input).
function checkAge(age) {
  try {
    if (age < 18) {
      throw new Error("You must be at least 18 years old.");
    }
    else{
      console.log("Access granted!");
  } 
} catch (error) {
    console.warn("Access denied:", error.message);
  }
}

checkAge(15); // Triggers the catch block
checkAge(21); // Runs successfully

//Example 5 

function checknumber(num){

try{
  if (typeof num !== "number")
{
  throw new Error("input must be a numbet");
}
else if (num>0){
console.log("positive number");
}
else if (num<0){
console.log("negative number");
}
else{
console.log("zero");
}

}
catch (error){
  console.log("Error:",error.message);

}
}

//Example 

function login(username,password){

  try{

  if(!username || !password){
    throw new Error ("Username and password required");
  }
  else if (username === "admin" && password === "1234")
  {
    console.log("Login successful");
  }
  else {
    console.log("Invalid username and password");
  }
}
  catch (error){
     console.log(error.message);
}
}

login("admin","1234");
login("admin","34");
login("","");

//Example odd even

function checkoddeven(num){

  try{
     if(typeof num !== "number") 
{
  throw new Error("Please enter a number");
}
else if(num % 2 === 0) {
console.log("Number is even");
}
else {
console.log("Number is odd");
}
}
catch (error){
  console.log("Error:",error.message);
}
  }

  checkoddeven(10);
  checkoddeven(7);
  checkoddeven("hello");

  //Form registeration

  function registeruser(username,age){
    try{
      if(!username)
      {
        throw new Error("Username is required");
      }
      if(age >= 18){
        throw new Error ("you must be 18 or older");
      }

      console.log("user registered successfully");
    }
    catch (error){
      console.log("Error message:",error.message);
    }
  }

  registeruser("",20);
  registeruser("swarna",6);
  registeruser("swarna",21);