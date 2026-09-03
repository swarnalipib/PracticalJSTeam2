//Find the N Largest Elements in an Array

const arr = [93, 17, 56, 91, 98, 33, 9, 38, 55, 78, 29, 81, 60];

//const n = 3;

arr.sort((a, b) => b - a);

//const largestElements = arr.slice(0, n);

//console.log(arr);
console.log(arr.slice(0,3));

function largestelement(arr,n)
{
   let x= arr.sort((a, b) => b - a); //arr.sort((a, b) => b - a);
   return x.sort(0,n);

}

let elements = [45,7,89,15,12,76];
let n =3;

//or 
function getNLargestElements(arr, n) {
    const largestElements = [];

    for (let i = 0; i < n; i++) {
        const max = Math.max(...arr); // to find the highest number in a JavaScript array 
                                      //for loop i=0 it find 9 1st then push into array and then filter( it removes all the copies 9 from array)

        largestElements.push(max);

        arr = arr.filter(num => num !== max);//removes all occurrences of the maximum value from an array in JavaScript,
    }

    return largestElements;
}

const array = [1, 8, 3, 5, 9, 2,9,3];

console.log(getNLargestElements(array, 3));

//using without builtin methods to find  the N Largest Elements in an Array

function findNLargest(arr, n) {
    // Handle edge cases manually without methods
    if (n <= 0) return [];
    if (n > arr.length) n = arr.length;

    let tempArr = [];   //  New array manually to avoid modifying the original array
    for (let i = 0; i < arr.length; i++) {  
        tempArr[i] = arr[i];
    }

    // This moves the 'n' largest elements to the end of tempArr
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < tempArr.length - 1 - i; j++) {
            if (tempArr[j] > tempArr[j + 1]) {  //It compares adjacent elements (arr[j] and arr[j + 1]) and swaps them if the left one is larger than the right one.
                let temp = tempArr[j];  
                tempArr[j] = tempArr[j + 1];
                tempArr[j + 1] = temp;
            }
        }
    }

    // Manually collect the last 'n' elements into a result array
    let result = [];
    let resultIndex = 0;
    for (let i = tempArr.length - n; i < tempArr.length; i++) {
        result[resultIndex] = tempArr[i];
        resultIndex++;
    }

    return result;
}

// --- Example Usage ---
const numbers = [3, 10, 4, 1, 5, 9, 2, 6];
const n = 3;

const largestElements = findNLargest(numbers, n);
console.log(largestElements);

//using without builtin methods to findout largest and smallest number in an array

function findMinMax(arr) {
   if (arr.length === 0) {
      return { min: null, max: null };
   }

   let min = arr[0];
   let max = arr[0];

   for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
         min = arr[i];
      }
      if (arr[i] > max) {
         max = arr[i];
      }
   }

   return { min, max };
}

const numbers = [4, 2, 9, 1, 7, 5, 12, 3];
const res = findMinMax(numbers);
console.log("Smallest:", res.min);
console.log("Largest:", res.max);

//Find the N smallest Elements in an Array Using JavaScript

function getNSmallestElements(arr, n) {
    const smallestElements = [];

    for (let i = 0; i < n; i++) {
        const min = Math.min(...arr); // to find the highest number in a JavaScript array 
                                      //for loop i=0 it find 9 1st then push into array and then filter( it removes all the copies 9 from array)

        smallestElements.push(min);

        arr = arr.filter(num => num !== min);//removes all occurrences of the minimum value from an array in JavaScript,
    }

    return smallestElements;
}

const ar = [1, 8, 3, 5, 9, 2,9,3];

console.log(getNSmallestElements(ar, 3));



//Find 2nd largest element in the N array

// function getNLargestElements(arr, n) {
//     const largestElements = [];

//     for (let i = 0; i < n; i++) {
//         const max = Math.max(...arr); // to find the highest number in a JavaScript array 
//                                       //for loop i=0 it find 9 1st then push into array and then filter( it removes all the copies 9 from array)

//         largestElements.push(max);

//         arr = arr.filter(num => num !== max);//removes all occurrences of the maximum value from an array in JavaScript,
//     }
//     return largestElements[1];

    
// }

// const array = [1, 8, 3, 5, 9, 2,9,3];

// console.log(getNLargestElements(array, 3));


//Reverse of an array withoust useing reverse method

function reverseArray(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {  // Start from the last element and move to the first
                                              //suppose array length is 4 ,then loop when i=3 then array[3], last element pushed 1st then when loop i =2,array[2] is pushed
                                            
    reversed.push(arr[i]);
  }
  return reversed;
}

const original = [1, 2, 3, 4, 5];
const result = reverseArray(original);

console.log(result);   // Output: [5, 4, 3, 2, 1]
console.log(original); // Output: [1, 2, 3, 4, 5] 

//Separate odd and even numbers from an array 

function num(arr)
{
    const evens = arr.filter(num => num % 2 === 0);//creates a new array containing only the even numbers from the original array
    const odds = arr.filter(num => num % 2 !== 0);//creates a new array containing only the add numbers from the original array

   return { evens, odds };


}
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result1 = num(array1);

console.log("Even Numbers:", result1.evens); // [2, 4, 6, 8, 10]
console.log("Odd Numbers:", result1.odds); 

//counting even and odd in an Array

// // Creating an Array
// function countevenoddarr(arr){

// let oddNum = 0;
// let evenNum = 0;

// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 0) {
//         evenNum=arr.evenNum++;
//     }
//     else {
//         oddNum=arr.oddNum++;
//     }
// }
// }

// //console.log("Total even number: " + evenNum);
// //console.log("Total odd number: " + oddNum);