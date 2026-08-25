console.log ("******************LOGICAL OPERATORS********************");
console.log ("\n");
console.log ("******************LOGICAL AND &&********************");
//1,Logical AND (&&) Operator -sed to combine boolean expressions.checks whether both operands are true. If both are true, the result is true and If any one or both operands are false, the result is false.
//Example 1
let x = 5 ;
let y = 11;

if (x<6 && y>10)
{
    console.log("Allowed");
}
else 
{
    console.log("Not Allowed");
}

//Example 2

let person_age=25;
let person_city ="delhi";

if(person_age>=18 && person_city==="delhi")
{
console.log("Eligible to vote");

}
else {
    console.log("Not Eligible to vote");
}

console.log ("******************LOGICAL AND &&********************");

//2. Logical OR (||) Operator -If either operand is true, the result is true. If both operands are false, the result is false.

//Example 1
let p = 6 ;
let q = 9;

if (p<6 || q>10)
{
    console.log("Allowed");
}
else 
{
    console.log("Not Allowed");
}

console.log ("******************LOGICAL OR ||********************");

//Example 2

let person_age1=25;
let person_country ="india";

if(person_age1>=67 || person_country==="Australia")
{
console.log("Eligible to vote");

}
else {
    console.log("Not Eligible to vote");
}

console.log ("******************Logical NOT (!)********************");

//3.Logical NOT (!) Operator -If the operand is true, it returns false. If the operand is false, it returns true.

//Example 1

let m = "Hello";
console.log(!m);

//Example 2


let a= 10;
let b="10";

if (!(a===b))
    {
    console.log("This is false");
} 
else {
      console.log("This is true");
}

//Example3
let loggedin = false;

if (!loggedin) {
  console.log("Login !!");
} else {
  console.log("Welcome back");
}

