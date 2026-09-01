//Hoisting ->behavior in JavaScript where variable, function, class,  moved to the top of their scope before the code runs.

//1.Variable Declarations (var)- variables declared with var are hoisted but initialized with a default value of undefined.

console.log(person); //undefined , Only the declaration is hoisted, not the assignment.
var person = "Swarnalipi";
console.log(person);

//or

//console.log(name);//name is not defined,: Throws a ReferenceError because name is not declared in the global scope yet.


//2.(let and const) declaration
//let and const are hoisted, but they are not initialized with any value
//They enter a state called the Temporal Dead Zone (TDZ) from the moment their scope begins until the line where they are formally declared is executed.Accessing them before that line throws a ReferenceError


//console.log(a); //ReferenceError: Cannot access 'a' before initialization
let a =10;
console.log(a);

//console.log(b); //ReferenceError: Cannot access 'b' before initialization
const b = 20;
console.log(b);

//Example1 using if else

//console.log(x);//undefined
//console.log(y);//Reference error is not defined
//console.log(z);//Reference error is not defined
if(true)
{
    var x =10;
    let y =20;
    const z= 30;
    console.log(x);//10
    console.log(y);//20
    console.log(z);//30
}

console.log(x);//10
//console.log(y);//Reference error is not defined
//console.log(z);//Reference error is not defined

//Example 2 using function

//console.log(name);//reference error name is not defined
function user()
{
      //console.log(name);//undefined
    var name="swarna"; //var is hoisted to the top of the function scope, but it is not initialized until the code execution reaches that line.
    //console.log(name); //gives output as swarna
   
}
 //console.log(name);//name is not defined ,Throws a ReferenceError because variables declared with var inside a function are local to that function and cannot be accessed outside it.
user();
//console.log(name);//name is not defined

//3.Function Declaration -, meaning both the function name and its complete body are loaded into memory before any code runs. You can safely call these functions anywhere in their scope.

hello(); 
function hello()
{

    console.log("my name is , Mahima!");
}

//hello();

console.log("*******************************");

//4.Function Expressions -When a function is assigned to a variable, it follows the hoisting rules of variables, not functions.

//sayHi(); // for var Throws TypeError: sayHi is not a function it is a varaible assigned with function
          // Here we have declare a function but holds it in a varaible
         // Throws ReferenceError (if using let or const)

var sayHi = function() {
  console.log("Hi!");
};

//5.class -let and const, JavaScript class declarations are hoisted but remain uninitialized. Accessing a class before it is declared always results in a ReferenceError

//const y = new Person(); // Throws ReferenceError

class Person {

    name="swarna";
    age=35;
};
const y = new Person();
console.log(y.name);