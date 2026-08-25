//Array-used to store a collection of multiple values under a single variable name

//Example 1- Array of fruits

let fruits = ["banana", "Orange", "apple", "mango"]; //creating array with elements 
console.log(fruits);
console.log(fruits[0]); //Accessing the 1st element of the array fruits
console.log(fruits[1]); //Accessing the 2nd element of the array fruits
console.log(fruits[2]); //Accessing the 3rd element of the array fruits
console.log(fruits[3]); ////Accessing the 4th element of the array fruits

//or Array can be created as follows

let vehicles = new Array("car","bus","scooter"); //If you don't want to use square brackets use keyword new with common bracket

console.log(vehicles);
console.log(vehicles[0]); 
console.log(vehicles[1]); 
console.log(vehicles[2]); 
console.log(vehicles[3]);

//Example 2 - We can have multiple objects in an array 


let person1 =
{
    name:"swarna",
    age:30
};

let person2 =
{
    name:"ajay",
    age:40
};

let myarray =[person1,person2];
console.log(myarray);
console.log(myarray[0]) //it prints all values of person1
console.log(myarray[1])  //it prints all values of person1
console.log(myarray[0].name)// it prints name of the person1
console.log(myarray[0].age)// it prints age of the person1
console.log(myarray[1].name)// it prints name of the person1
console.log(myarray[1].age)// it prints age of the person1
