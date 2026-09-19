//A module file is a .js file using import / export.
//A JavaScript module is a separate file containing reusable code that can be exported from one file and imported into another file using export and import.

//Modules help organizing code, prevent naming conflicts.,better readability,easily reused, easier to maintain and debug.
//Modules can export varaibles,function,class,object
//A module uses the export keyword to share values with other files.
//A module can (optionally) have one default export.

//JavaScript mainly uses:
//Named exports/imports
//Default exports/imports
//Mixed exports


class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    display() {
        console.log(this.name, this.age);
    }
}

let stu = new Student();

stu.display();