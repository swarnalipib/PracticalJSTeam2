//Filters -an array function that creates a new array containing all elements from the original array that pass a specific condition
//The filter method evaluates the return value of its callback function for every element in the array. If the return value is truthy, the element is kept. If it is falsy (like 0, false, null, undefined, NaN, or ""), the element is removed


console.log("**************************FILTER******************************")


//Example1

const numbers = [1,2,3,4,5];
const result = numbers.filter(num => num>=3 );
console.log(result);//[ 3, 4, 5 ]

//Example2 filtering with even numbers

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers1.filter(num => num % 2 === 0);

console.log(evenNumbers); // [2, 4, 6, 8, 10]

//Example 3 Working with strings which search value

const fruits = ["apple", "banana", "grapes", "mango", "orange"];
const searchResult = fruits.filter(fruit => fruit.includes("ap"));

console.log(searchResult); // ['apple', 'grapes']

//Example 4 Filtering by object properties:

const users = [
  { name: "John", age: 17 },
  { name: "jelly", age: 22 },
  { name: "Rohan", age: 29 }
];
const a = users.filter(user => user.age >= 18);

console.log(a); //[ { name: 'jelly', age: 22 }, { name: 'Rohan', age: 29 } ]

//Example 5 working with multiple conditions

const person = [
  { name: "John", age: 30, gender: "male" },
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 35, gender: "male" },
  { name: "Eve", age: 20, gender: "female" }
];
const malesUnder30 = person.filter(person => person.gender === "male" && person.age >= 30);
console.log(malesUnder30);//[ { name: 'John', age: 30, gender: 'male' }, { name: 'Bob', age: 35, gender: 'male' }]

//Example 6 Removing falsy values

const originalArray = [0, "hello", false, 42, "", null, "world"];
const myArray = originalArray.filter(Boolean); // It checks if each item in the array is truthy or falsy. it removes falsy and keeps truthy

console.log(myArray);

console.log("**************************REDUCE******************************")

//reduce() -It takes an initial value and processes elements from left to right, reducing the array to a single result.
//iterates over an array, applying a reducer function to each element, accumulating a single output value
//The reduce() method does not execute the function for empty array elements.
//The reduce() method does not change the original array.

//Example-1

const number = [10,20,30,40,50];

const sum = number.reduce((acc,num) => { //acc Specifies the initial value or previously returned value of the function , num current value , 0 is the initial value
    return acc + num;  
},0);
console.log(sum)

//Example-2

const b = ["javascript", "html", "css"];

const res = b.reduce((acc, str) => acc + str.length, 0); //// Use reduce to calculate the sum of the lengths of the strings.intial value 0 can be any value 10,20;;;;

console.log(res);//17


//Example 3 Calculate total price for an array

const products = [
  { name: "Shirt", price: 20 },
  { name: "Shoes", price: 50 },
  { name: "Hat", price: 15 }
];

const p = products.reduce((acc,prod) =>{
    return acc + prod.price ;
},0)

console.log("Total price:", p);

//Example 4 
const nestedArray = [[1, 2], [3, 4], [5, 6]];

const s = nestedArray.reduce((acc, arr) => {
  return acc.concat(arr);
}, []); // Starting with an empty array

console.log(s);

//Example 5 removes duplicate 

const number1 = [1,2,2,3,4,4,5];

const d = number1.reduce((acc,num) => {
    if(!acc.includes(num))//The includes method checks if the current number (num) is already inside the accumulator array.if not found then add it by push
    {
        acc.push(num)
    }
    return acc;

},[]);
console.log(d);

console.log("**************************MAP******************************")

//Map()-creates a new array by calling a specific function on every element in the parent array. It iterates through the elements without changing the original array.
//holds key-value pairs

//Example1-
let numbers2=[1,2,3,4];
let squares = numbers2.map(num => {
    return num*num
});
console.log(squares);//[ 1, 4, 9, 16 ]

//Example2 

const user = [
  { name: "John", age: 17 },
  { name: "jelly", age: 22 },
  { name: "Rohan", age: 29 }
];
const m = user.map(user => user.age);

console.log(m);

//Using all 3 together 

const product = [
  { name: "apple", price: 200 },
  { name: "banana", price: 50 },
  { name: "orange", price: 50 },
  { name: "kiwi", price: 300}
];

const map = product.map(product => product.price);
console.log(map);

const filter = product.filter(prod => prod.price >50);
console.log(filter);

const reduce = product.reduce((acc,cur) => {
     return acc+ cur.price;
},0);

console.log(reduce);