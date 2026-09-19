//Named + Default Export

export const company = "Mindfire LLT Ltd";

export function calculateSalary(salary) {
    return salary + 5000;
}

export default class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    display() {
        console.log(this.name, this.salary);
    }
}