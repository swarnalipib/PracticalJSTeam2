export class Teacher {

    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }

    display() {
        console.log(this.name, this.subject);
    }
}