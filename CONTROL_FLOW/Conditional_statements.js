//Conditional statements -Conditional statements in JavaScript control the flow of execution by running different code blocks based on whether a condition evaluates to true or false

console.log("*******************IF STATEMENT************************");
//1.if statement -Running code for a single true condition.
//Example 1:

let x= 120;

if (x > 100) {
  console.log("Transaction approved.");
}

//Example 2
let n = 10;

if (n % 2 === 0) {
    console.log("Even");
}

if (n % 2 !== 0) {
    console.log("Odd");
};

console.log("*******************IF ELSE STATEMENT************************");
//IF else statement : Choosing between exactly two opposing outcomes.
//Example 1
let num=11;

if (num%2==0)
{

  console.log("It is a even number");  
}
else 
{
console.log("It is a odd number");  
}
console.log("Program exited"); 

//Example 2

let person_age=25;

if(person_age>=18)
{
console.log("Eligible to vote");

}
else {
    console.log("Not Eligible to vote");
}

console.log("*******************IF ELSEIF STATEMENT************************");
//if...else if Evaluating complex ranges or multiple independent criteria.
//Example 1 - largest number

let a=30,b=40,c=10;

if(a>b && a>c)

{
    console.log("a is greater number");
}
else if(b>a && b>c)
{
console.log("b is greater number");
}
else
{
console.log("c is greater number");
}

//Example 2 - printing the week

let week=0;

if(week==0)
{
    console.log("Sunday");
}
else if(week==1)
{
    console.log("Monday");
}
else if(week==2)
{
    console.log("Tuesday");
}
else if(week==3)
{
    console.log("Wednesday");
}
else if(week==4)
{
    console.log("Thursday");
}
else if(week==5)
{
    console.log("Friday");
}
else if(week==6)
    {
    console.log("saturday");
}
else {
    console.log("Invalid week number");

}

console.log("*******************SWITCh STATEMENT************************");
//switch statement-evaluates an expression and executes the matching case block based on its value

//Example 1 -printing the week with switch statement
let weekno=7;

switch(weekno)
{
    case 1: console.log("Sunday");break;
    case 2: console.log("monday");break;
    case 3: console.log("Tuesday");break;
    case 4: console.log("Wednesday");break;
    case 5: console.log("Thursday");break;
    case 6: console.log("Friday");break;
    case 7: console.log("Saturday");break;
    default: console.log("invalid week");
}

//Example 2 -choosing a branch on marks secured with switch statement

let marks = 450;
switch (true)
{
    case marks >= 450: console.log("choose branch -Computer science engineering");break;
    case marks >= 300: console.log("choose branch -Mechanical engineering");break;
    case marks >= 250: console.log("choose branch -Electronics engineering");break;
    case marks >= 200: console.log("choose branch -civil engineering");break;
    default: console.log("choose branch -Bio technology");break;
        }