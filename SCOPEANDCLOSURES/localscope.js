//local scope:A local variable is a variable declared within a function, making it accessible only inside that function. It cannot be used outside the function.
//Variables declared inside a block using let or const are block-scoped.

//Example 

function displaynum() {
    const a = 10; // This variable is in the local scope
    console.log("Inside function: " + a);  // Accessing the local variable inside a function
}

displaynum(); 
//console.log("Outside function: " + a); // Accessing the local variable inside a function
//Reference error , a is not defined

//Example nested function 

function one(){

    const name="swarna";

    function two(){
        const age=36;
        console.log(name);
    }
    //console.log(age);//this cannot be accessed  refresnece error 
    two();
}

one();

//block,class,object scope

//example 1
var x = 1;
{
  var x = 2;
}
console.log(x); // 2

//example 2

var x = 1;
let y = 1;

if (true) {
  var x = 2;
  let y = 2;
}

console.log(x);//2 var can be reassigned in a block scope as it is global scoped

console.log(y);//1 let don't reassign inside a block scope

//Example 3

const c = 1;
{
  const c = 2;
}
console.log(c); // 1

 
//Example 4 for loop 

for (let i = 0; i < 10; i++)
    {
     console.log(i);
    }

//Class scope - class scope refers to the specific boundary within a class block where its properties (fields) and methods are defined

class Car {
  brand = "Toyota"; 

  constructor(model) {
    this.model = model; 
  }

  display() {
    console.log(`This is a ${this.brand} ${this.model}.`); 
  }
}

let obj =new Car(2025);
console.log(obj);
obj.display(); //Because there is no return statement, it returns undefined.

//Object scope -object scope usually refers to how variables and properties are accessed inside or outside of an object. avaScript objects do not create their own scope

const user = {
  
  name: "swarna",
  age: 25,

  
  sayHello: function() {// Object method (a function inside the object)

    console.log("Hello");
  }

}

console.log(user.name);
user.sayHello();