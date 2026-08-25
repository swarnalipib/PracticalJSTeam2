//While loop -executes as long as the condition is true.

//Example 1
//print 1,2,3...10

let i =1;

while(i<=10)
{
    console.log("count:",i); 
    i++; // if we don't add i++ it prints 1,1,1... infinity
}

//Example 2
//print even numbers 2,4...10
let j=2;

while(j<=10)
{
    console.log(i);
    j+=2 //j=j+2
} 

//Example 3
//print backward from 10 9 8...1

let a=10;
while(a>0)
{
    console.log(a);
    a--;
}

//Example 4 - using array

let index = 0;
const fruits = ["apple", "banana", "grapes","watermelon"];

while(index < fruits.length) {
  console.log("Fruit:",fruits[index]);
  index++;
}
