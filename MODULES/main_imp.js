//1.Named Export and Import -Import names must match export names:
//Examples 

import { add ,subtract } from './math_exp.js';
let result = add(4, 3);
let result1= subtract(12,6);

console.log(result);
console.log(result1);

import {mul as multiply} from './math_exp.js';
console.log(multiply(3,4));

//Default Export and import - one module can have 1 default and it doesn't curly braces and we can rename the name
// import greet from './math_exp.js';
// console.log(greet("swarna"));

import Student from './math_exp.js';
let stu = new Student("Swarna",35);

stu.display();

//or With a default export, you can choose the import name yourself:

// import Person from './math_exp.js';
// let stu = new Person("Swarna",35);

// stu.display();

//Import varaibles

import { name, age, course } from './math_exp.js';

console.log(name);
console.log(age);
console.log(course);


//Export objects

import stud from "./student.js";

console.log(stud.name);
console.log(stud.age);
console.log(stud.marks);
