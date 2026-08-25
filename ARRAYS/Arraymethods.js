//Array methods - returns the elements of an array as a comma separated string.

let fruits=["orange","purple","grapes","apple","banana"];
console.log(fruits.toString());

//1.pop() function -Removes and returns the last element of the array.

fruits=["orange","purple","grapes","apple","banana"];
console.log(fruits.pop());
console.log(fruits.pop(2));//will completely ignore the 2 argument and will always remove and return the very last element of the array.
console.log(fruits.pop("grapes")); // will completely ignore the  argument and will always remove and return the very last element of the array.

//2.push() function-adds a new element to an array (at the end):

fruits=["orange","purple","grapes","apple","banana"];
console.log(fruits.push("plum"));
console.log(fruits);

//3.shift() function -Removes and returns the first element of the array.

fruits=["orange","purple","grapes","apple","banana"];
console.log(fruits.shift());
console.log(fruits);

//4.unshift() function -Adds items to the beginning of the array. Returns the new length.

fruits=["orange","purple","grapes","apple","banana"];
console.log(fruits.unshift("lemon"));
console.log(fruits);
//console.log(fruits.unshift(cherry)); //it throws reference error that cherry not defined as it is not in inverted comma

//5.concat() means joining array

let arr1 = [100,200,300];
let  arr2 = ["A","B","C"];
let arr3 = ["swarna",500];
console.log(arr1.concat(arr2,arr3));

let arr4 = ["swarna","jyoti","subha"];
let arr5 = ["lipi","pragya"];
console.log(arr4.concat(arr5));

//6.slice() -slices out a piece of an array into a new array:It doesn't alter the original array
fruits=["orange","purple","grapes","apple","banana"];

//With 1 argument
console.log(fruits.slice(2)); // it slice out 2 elements and return the left array elements
//with 2 arguments
console.log(fruits.slice(1,3)); //it start slicing from index 1 element and continue to 2 ,doesn't include 3 and returns the slice elements
console.log(fruits);

//7.sort()
fruits=["orange","purple","grapes","apple","banana"];
console.log(fruits.sort()); //used for sorting order 

let num = [200,700,100,800,400];
console.log(num.sort());

//8.reverse()
num = [200,700,100,800,400];
console.log(num.reverse());// it will display elements i reverse order

//9.Splice() -: Changes array element by removing, replacing, or adding elements at a specific index

//Example 1 with 1 argument
fruits=["orange","purple","grapes","apple","banana"];
console.log(fruits.splice(2)); //It startes from index 2 and returns the removed elements

//Example 2 with 2 arguments 
fruits=["orange","purple","grapes","apple","banana"];
console.log(fruits.splice(1,3)); //it starting one is the index to start and end is count

//Example3 insert elements 
fruits=["orange","purple","grapes","apple","banana"];
console.log(fruits.splice(0,2,"kiwi","plum")); //it returns the removed elements
console.log(fruits) //it returns with left array elements and add the new elements from index 0

//10.at() - returns the exact element of the array 
fruits=["orange","purple","grapes","apple","banana"];
console.log(fruits.at(2));//grapes
console.log(fruits.at(-1));//banana