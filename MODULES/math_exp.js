//Named Export and Import -Import names must match export names:
//demonstrates how to export multiple functions from a module and import them with new names for use in another file
// It shows how to perform basic arithmetic operations using modular JavaScript.

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function mul(a, b) {
    return a * b;
}

//2.Default Export and Import
//showcases how to use JavaScript modules to define and import a function across different files.
//A module can have one default export.

// export default function greet(name) {
//   return `Hello, ${name}!`;
// }

//Module with Classes

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    display() {
        console.log(this.name, this.age);
    }
}

export default Student;

//Export variables

export let name = "Lipi";
export let age = 22;
export let course = "JavaScript";

//Export an Object

const student1 = {
    name: "Lipi",
    age: 22,
    marks: 85
};

//export default student1;