//Strings are for storing text and are written with quotes

let vehicle = 'car';  // Single quotes
console.log(vehicle);

let fruit = "apple";  // double quotes
console.log(fruit);

let a = 'He is called "superhero"';// quotes inside quotes
console.log(a);

let language = `javascript`;//using template literal
console.log(language);

let demo = "swarnalipi"
console.log(`my name is ${demo}`);//using template literal/String Interpolation
console.log(`Hello, ${demo}! Next year you will be ${20 + 5}.`);//String Interpolation: can embed variables or expressions directly inside the string

let text =`This is line 1 
This is line 2
This is line 3
This is line 4`;
console.log(text); // allow multiline strings using literal:

//the string created by the new keyword is an object and is not the same as normal strings.
const str1 = new String("GeeksforGeeks");
const str2 = "GeeksforGeeks";

console.log(typeof(str1));//object
console.log(typeof(str2));//string

console.log(str1 == str2); //true
console.log(str1 === str2);//false

//using empty strings
let s1 = '';
let s2 = "";

console.log(s1);//prints blank line
console.log(s2);//prints blank line

//Using escape characters 

let ss= "Testing is started with \n javascript"; //\n is used for new line 
console.log(ss);

let ss1= 'It\'s alright.'; // it throws error as multiple quotes is there so it use black slash 
console.log(ss1);

let ss2 ="We are the so-called \"mindfireans\" from the bbsr."; //\" inserts a double quote in a string:
console.log(ss2)

