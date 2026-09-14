import { Student } from "./student.js";
import { Teacher } from "./teacher.js";
import { percentage } from "./calculator.js";

let s1 = new Student("Lipi", 450);
let t1 = new Teacher("Raj", "JavaScript");

s1.display();
t1.display();

console.log("Percentage:", percentage(450, 500));