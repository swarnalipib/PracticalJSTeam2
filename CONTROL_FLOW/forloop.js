//Looping is a block of code to run multiple times as long as a given condition is satisfied.
//for loop -repeats a block of code a specific number of times. It contains initialization, condition, and increment/decrement in one line.

//Example 1  -print 1,2..10

for(let i=1;i<=10;i++)
{
    console.log(i);
}

//Example 2

//print 10,9..1

for(let i=10;i>0;i--)
{
    console.log(i);
}

//Example 3 

//print factors of 3 (3,6,9,12 ...)

for(let i=3;i<=20;i+=3)
{
    console.log(i);
}

//Example 4 Iterating Over an Array

const fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//Example 5 using continue (to skip the execution when specific condition met)

for (let i = 1; i <= 5; i++) {
  if (i === 4) {
    continue; // Skips printing 4
  }
  console.log(i);
}

//Example 6 using break (stop/exit the loop)

for (let i = 1; i <= 5; i++) {
  if (i === 4) {
    break; // Stops the loop completely
  }
  console.log(i);
}