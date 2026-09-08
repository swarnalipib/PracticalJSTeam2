// are built-in data structures used to hold collections of data
//Set is a collection of unique values (no duplicates allowed).
//Set is a built-in JavaScript object that only allows unique values.
//Map is a collection of key-value pairs, where keys can be any data type
//In JavaScript, Set is a constructor function (or a class). To create a brand new instance of an object from a class, you must use the new keyword.If you omit new and just write Set(num1), JavaScript will throw a TypeError, because Set cannot be called as a regular function. Think of new Set()

console.log ("******************SETS*************************");
//Example 1-
let fruits = new Set(["apple","banana","apple","orange"]);
console.log(fruits);//duplicate values are removed set(3)c{'apple','banana','orange'}

//Example
// let fruits1 =  Set(["apple","banana","apple","orange"]);
// console.log(fruits1); //TypeError: Constructor Set requires 'new'

//Example 2 

let numbers = new Set([1,2,2,3,3,4])
console.log(numbers);

//Example 3 using add() to add values

let person = new Set();
person.add("Mitali");
person.add("Rupali");
person.add("Monali");
console.log(person); 

//Example 4 duplicate value

let num = new Set();
num.add(10);
num.add(20);
num.add(30);
num.add(20);

console.log(num);//duplicate value not added 


//Example 5 loop through set

let demo = new Set();
demo.add("A");
demo.add(1)
demo.add("B")
demo.add("2");

for (let k of demo) {
    console.log(k);
    } // A
      // 1
      // B
      // 2

//Example 6 check a value exist using has();

let fruitbasket = new Set (["apple","grapes","plum","watermelon","mango"]);
console.log(fruitbasket.has("plum"));//true
console.log(fruitbasket.has("banana"));//false


//Example 7 delete a value

let fruit = new Set (["apple","grapes","plum","watermelon","mango"]);
console.log("Before delete:",fruit);
fruit.delete("mango");
console.log("After delete:" ,fruit);

//Example 8 find size

let nums = new Set([10,20,30,40,20]);
console.log(nums.size);

//Example 9 - remove duplicate form arrays

let num1 = [1,2,2,3,4,4,5];
let uniquenums =[...new Set(num1)]; //... (Spread Operator): The spread operator expands the Set back into individual elements.
                                   // [...]: The square brackets collect those individual elements and packs them back into a brand new array.
console.log(uniquenums); //remove duplicate values

//Example 10 - change set back to array 

let mySet = new Set(["A","B","C"]);
let myArray = [...mySet];
console.log(myArray);

console.log ("******************MAPS*************************");

//Map is a collection of key-value pairs, where keys can be any data type
//Map keys must be unique

//Example1 using set() to add values to map()
let user = new Map();
user.set("name","swarna");
user.set("age",35);
user.set("id",101);
console.log(user);//op -Map(3) { 'name' => 'swarna', 'age' => 35, 'id' => 101 }

//Example 

let user1 = new Map();
user1.set("name","swarna");
user1.set("name","35");
user1.set("name","suman");
user1.set("name","A");
console.log(user1);//It prints last element A removes duplicacy of keys so keys must be unique
                   //Map(1) { 'name' => 'A' }

//Example2 using get()

let person1 = new Map();
person1.set("name","swarna");
person1.set("age",35);
console.log(person1);
console.log(person1.get("name"));
console.log(person1.get("age"));

//Example3 using has()

let emp = new Map();
emp.set("name","swarna");
emp.set("age",35);
emp.set("id",101);
console.log(emp.has("name"));//true
console.log(emp.has("swarna")); //false it cannot search values ,it only search key
console.log(emp.has("address"));//false

//Example4 deleting a value 
let emp1 = new Map();
emp1.set("name","swarna");
emp1.set("age",35);
emp1.set("id",101);
console.log(emp1.delete("id"));//it delete age Map(2) { 'name' => 'swarna', 'age' => 35 }

//Example5 find the size

let emp2 = new Map();
emp2.set("name","swarna");
emp2.set("age",35);
emp2.set("id",101);
console.log(emp2.size);

//Example6 loop through a map

let marks = new Map();
marks.set("Sonali",90);
marks.set("Monali",80);
marks.set("Raj",65);

for (let x of marks)
{
    console.log(x);
}

//or 
let marks1 = new Map();
marks1.set("Sonali",90);
marks1.set("Monali",80);
marks1.set("Raj",65);

for (let [name,mark] of marks1)
{
    console.log(name,mark);
}

//Example 7 - create maps directly without using set
let p = new Map([["name","swarna"],["age","35"],["id","101"]]);
console.log(p);
console.log(p.get("id"));//101

//Example 8 Map can use key as numbers 

let pr = new Map([["101","swarna"],["102","Raman"],["103","Suman"]]);
console.log(pr);
console.log(pr.get("102"));//Raman