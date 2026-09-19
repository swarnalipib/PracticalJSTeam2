

import Employee, {
    company,
    calculateSalary
} from "./employee.js";

let e1 = new Employee("Rahul", 30000);

e1.display();

console.log(company);
console.log(calculateSalary(30000));