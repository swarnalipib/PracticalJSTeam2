//Closure -a feature where an inner function has access to the outer (enclosing) function's variables, even after the outer function has finished executing.
//In JavaScript, closures are created every time a function is created
//USED TO Create private variables


function outer()
{
var a=10;
function inner()
{
    console.log(a); //use variable declared in the parent(outer) function
}

inner();
//console.log(a);
}

outer();

//Example

function demo(){

var x=7;
function demo1()
{
  x++;
 console.log(x);
}

return demo1();
}

demo();

//

//Example 

function test(){ 
    var x = 7; 
    return function tes() { 
        return x++; 
    } 
     tes(); 
} 
test();


//Example 

const counter = (function () {
    let count = 0;

    return {
        increment: function () {
            count++;
            console.log(count);
        },
        reset: function () {
            count = 0;
            console.log("Counter reset to 0");
        },
    };
})();

counter.increment(); 
counter.increment();
counter.increment();
counter.reset();

//Example 

function add(x)
{
    return function (y)
    {
    return x+y;//it will access x from outer function and add with y
    };
}

let c=add(4);

console.log(c(2));

//Example closure scope chain


const e = 10; // global scope
function sum(a) {
  return function sum2(b) {
    return function sum3(c) {
      return function sum4(d) {     // local scope
        return a + b + c + d + e;
      };
    };
  };
}

const sum2 = sum(1);
const sum3 = sum2(2);
const sum4 = sum3(3);
const result = sum4(4);
console.log(result); //20