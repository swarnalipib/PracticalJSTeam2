//Spread operator (...)expands an iterable (like an array, object, or string) into its individual elements or properties
//spread operator (...) only creates a shallow copy

//Example 1  with Arrays of numbers

const fruits= ["Apple", "Grapes", "Plum"];

const n = [...fruits];

console.log(n);//[ 'Apple', 'Grapes', 'Plum' ]

//Example 2 copy an array 

const numbers = [1, 2, 3];

const n1 = [...numbers];

console.log(n2);//[1, 2, 3]

//Example 3 Adding Multiple Elements -we get the content on one array inside the other one

let a = [10, 20];
let b = [...a, 30, 40];

console.log(b);//[ 10, 20, 30, 40 ]

//Example 4 copying all the elements of the given array to the another new array 

let x =[1,2,3];
let y =[...x];
console.log(y);

//Example 5 concatenate Arrays
let p = [10, 20];
let q = [30, 40];

let r = [...p, ...q];
console.log(r);

//Example 6 Working of Objects 

const user = { name: "John", age: 17 };
const updatedUser = {...user,city:"Delhi"};
console.log(updatedUser);

//Example 7 update an existing property 

const updatedUser1 = {...user,name:"Swarna"};
console.log(updatedUser1);

//Example 8 merge two objects 

const usr1 = {
    name: "Jen",
    age: 22,
};

const usr2 = {
    name: "Andy",
    location: "canada"
};

const mergedUsers = { ...usr1, ...usr2 };//Both objects contain the name property. so it overwrite it
console.log(mergedUsers); //{ name: 'Andy', age: 22, location: 'canada' }

//Example 9 Passing Array Elements as Function Parameters

function add(x, y, z) {
  return x + y + z;
}

let s = [10, 20, 30];
console.log(add(...s));

//Example 10 spread vs rest in js 

//he spread operator expands an iterable into individual elements, while the rest operator collects multiple elements into a single array or object
//spread - unpacks/expands , Rest -packs/condenses


//Example of spread 

const nums = [1,2,3];
console.log(...nums); //1 2 3

//Example of rest
function sum(...numbers)
{
    console.log(numbers);
}
sum(1,2,3); //[ 1, 2, 3 ] it collects all elements into ana array

//Example 11 calculate Area of rectangle 

function calculate(length, breadth) {
  return length * breadth;
}

const d = [10, 5];

// The spread operator unpacks the array elements into length, width, and height
const Area = calculate(...d);

console.log("Area of rectangle :",Area);

//Example 12 using for loop 

function Inventory() {
  const morningDelivery = ['Apples', 'Bananas'];
  const afternoonDelivery = ['Oranges', 'Grapes'];
  const nightDelivery = ['Cherry', 'Plum'];

  const combinedInventory = [...morningDelivery, ...afternoonDelivery, ...nightDelivery]; //Merged all inventory

  for (const x of combinedInventory) { //Loop through the mergedinventory
    console.log(`In stock: ${x}`);
  }
}

Inventory();

//Example 13 count vowels

let string = "JAvascript programming"

let count = 0;

for(let y of [...string.toLowerCase()])
{
    if ("aeiouAEIOU".includes(y))
    {
        count++;
    }
}

console.log(count);

//Example 14 palindrome number

let str = "madam"
let reversed = [...str].reverse().join("");

if (str === reversed)
{
    console.log("palindrome number");
}
else{
    console.log("Not palindrome number");
}