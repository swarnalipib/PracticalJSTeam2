export class Student {

    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    display() {
        console.log(this.name, this.marks);
    }
}