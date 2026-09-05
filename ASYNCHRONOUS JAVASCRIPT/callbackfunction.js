//Asynchronous Callbacks -are executed at a later time, allowing the main program to continue running without waiting.

//callback function -is a function that is passed as an argument to another function and executed later.

//Example 1
function demo(callback) 
{
    callback();
}
demo (function (){ 
    console.log("Hello"); //A function is passed as an argument to another function(demo)
}
) //Hello


//Example2
function one(name,callback)
{
console.log("My name is:"+ name )
callback();
}

function two()
{
    console.log("Good morning");
}

one("swarna",two);//Here, two() is passed as a callback to one(), which executes after the one function is executed.

//Example 3

function add(a,b,callback){
    let result = a+b;
    callback(result);
}

function displayresult(result){
 console.log("Result is:"+result)
}

add(2,4,displayresult);

//or


function add(a,b,callback){
    let result = a+b;
    callback(result);
}

add(5,4,function(result)
{
    console.log(result);
}

);

//Example 4 

function calc(a, b, callback) {
    return callback(a, b);
}

function addition(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

console.log(calc(5, 3, addition));    
console.log(calc(5, 3, multiply));

//Example 5

let a = 5;
let b = 6;
console.log(a);
setTimeout(function(){  //function passed to settimeout is a callback
    console.log("This will run after 2 secs");
},2000);

console.log(b);

//Example 6 callback with multiple arguments 

function user(name,age,id,callback)
{
    console.log("My name is:"+ name);
    console.log("My age is:"+ age);
    console.log("My id is:"+ id);
    callback(name);
}

function register(name){
    console.log(name + " is registered");
}

user("swarna","35","101",register);

//or

function user(name,age,id,callback)
{
    console.log("My name is:"+ name);
    console.log("My age is:"+ age);
    console.log("My id is:"+ id);
    callback(name);
}

user("swarna","35","101",function(name){
    console.log(name + " is registered");
});

//Example 7

function login(username,password,callback)

{
    if(username === "admin" && password === "1234")
    {
        callback("Login successfull");
    }
else {
    callback("Invalid username and password")
}

}

login("admin","12",function(message){

    console.log(message);
})

login("admin","1234",function(message){

    console.log(message);
})

//Example 8 Division
function divide(a,b,callback){
    if (b == 0)
    {
      callback("cannot divide by zero");
    }
    else 
        {
            callback(a/b);
}
}

divide (10,2,function(result){
    console.log("Result is:"+result);
}, function(message){
    console.log("Error:"+message);
})

divide (10,0,function(result){
    console.log("Result is:"+result);
}, function(message){
    console.log("Error:"+message);
})

//Example 9 - Even and odd

function findevenodd(num,callback)
{

if (num%2===0)
{
    callback("Its a even number")
}
else 
{
    callback("its a odd number")
}
}

findevenodd(6,function(message){
    console.log(message);
});

findevenodd(7,function(message){
    console.log(message);
});

//Example 10 with foreach()

//foreach() -its an array builtin method that executes a provided function once for each array element.It does not return a new array and does not modify the original array.It will perform the actions of each elemnet of array

let numbers = [10,20,30,40];
numbers.forEach(function(numbers)
{
    numbers=numbers+1;
    console.log(numbers);
})


//map() -creates a new array by calling a specific function on every element in the parent array. It iterates through the elements without changing the original array.
//holds key-value pairs

let numbers1=[1,2,3,4];
let squares = numbers1.map(function(num){
    return num*num
});

console.log(squares);

//filter() - an array function that creates a new array containing all elements from the original array that pass a specific condition

let numbers2 = [10,15,20,25,30];

let evenNum = numbers2.filter(function(num){
    return num%2 === 0;
})
;
console.log(evenNum);