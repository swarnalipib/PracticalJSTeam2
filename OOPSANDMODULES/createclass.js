//Class It define properties and methods in a single structure, making code more organized, reusable, and easier to maintain.
//it is blueprint for creating objects
//Use the keyword class to create a class.
//Always add a constructor() method.

//Example -Basic class
class Person {
    constructor(name, age)  //constructor special method that is automatically called when an instance of the class(object) is created.
    { 
    this.name = name; //This belongs to class person and access properties of it
    this.age = age;
    }
    display() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const p = new Person("Swarna","35");
p.display(); //Hello, my name is Swarna and I am 35 years old.

//Example 

class school
{
    setDetails()
    {

this.sname="swarna";
this.sid=101;
this.sec="A";
}

display()
{
    console.log(this.sname,this.sid,this.sec);
}

}

let stu = new school();
stu.setDetails();
stu.display();


//Example 

class school
{
    constructor(sname,sid,sec)
    {

this.sname=sname;
this.sid=sid;
this.sec=sec;
}

display()
{
    console.log(this.sname,this.sid,this.sec);
}

}

let stu1 = new school("Javed",21,"A");
stu1.display();

let stu2 = new school("Mary",30,"B");
stu2.display();

let stu3 = new school("Smith",78,"C");
stu3.display();