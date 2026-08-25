//Function parameters and aruguments

//Example 1 - with 1 parameters passed inside a function

function greet()
{
  console.log("Hello Good morning!");
}
greet();

//or 

 function greetings()
 {
    return("How are you");
 }

 console.log("Hello," + greetings()); 

//Example 2 - with 2 parameters passed inside a function
function multiply(num1, num2) {
  return num1 * num2;
}
const result = multiply(5, 4);
console.log("Multiplcation:"+result);

//Example 3- transforing the multiple arguments to their squares 

function square(num1,num2,num3,num4)
{
  return [num1*num1,num2*num2,num3*num3,num4*num4];
}
let s = square(2,3,4,5);
console.log(s);

//Example 4- Calculater Area of triangle 

function triangle(base,height)
{
  return 0.5*base*height;
}
const area = triangle(4,6);
console.log("Area of triangle:" + area);

//Example 5 - To check even or odd 

function check(num) 
{
  if (num % 2 === 0)
     {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(check(7));  // Output: Odd
console.log(check(12)); // Output : even

//Example 6- default parameter 

function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5, 2));
// Expected output: 10

console.log(multiply(5));
// Expected output: 5
//OR
function myfunc(name="guest")
{
  return  name;
}
console.log(myfunc("swarna"));
console.log(myfunc());

//assigning function to a varaible and don't return

const a = function()
            {
              console.log("hello");
            };

          console.log(a);