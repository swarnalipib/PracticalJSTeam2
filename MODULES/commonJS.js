//CommonJS is the default, synchronous module system used in Node.js. It utilizes module.exports or exports to share code, and the require() function to import it.

//Example
//Exporting an object containing both functions
// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;
// module.exports = {
//   add,
//   subtract
// };



function add(a,b)
{
    return a+b;
}

function subtract(a,b)
{
    return a-b;
}

module.exports = {
  add,
  subtract
};

//Example

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    display() {
        console.log(this.name, this.age);
    }
}

module.exports.default = Student;