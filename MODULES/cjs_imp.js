
const m = require('./commonJS.js'); 

console.log(m.add(5, 3));   
console.log(m.subtract(5, 3));

const Student = require( './commonJS.js').default;
let stu = new Student("Swarna",35);

stu.display();