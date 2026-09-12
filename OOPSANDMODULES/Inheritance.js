//Inheritance Inheritance in JavaScript is a mechanism that allows one object or class to acquire properties and methods from another. It helps in code reusability and creating hierarchical relationships between classes.
//Supports method overriding in child classes.
//Use extends keyword 

//Single Inheritance -A single child class inherits directly from a single parent class.

class A
{
    a=100;
    display()
    {
        console.log(this.a);
    }
}

class B extends A
{
   b=200;
    show()
    {
        console.log(this.b);
    }

}

let obj1 = new B();
obj1.show();
obj1.display();

//Example Multilevel inheritance 

class Grandparent 
{
    showGrandparent()
    {
        console.log("I am Grandparent");
    }
}

class Parent extends Grandparent {
    
    showParent()
    {
        console.log("I am Parent");

    }
}

class Child extends Parent {

    showChild()
    {
        console.log("I am child");

    }
}

let obj = new Child();

obj.showGrandparent();
obj.showParent();
obj.showChild();

//Another example 

class Person {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log(`Name: ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, rollNo) {
        super(name);
        this.rollNo = rollNo;
    }

    showRollNo() {
        console.log(`Roll No: ${this.rollNo}`);
    }
}

class CollegeStudent extends Student {
    constructor(name, rollNo, college) {
        super(name, rollNo);
        this.college = college;
    }

    showCollege() {
        console.log(`College: ${this.college}`);
    }
}

const student = new CollegeStudent("Rahul", 101, "ABC College");

student.showName();
student.showRollNo();
student.showCollege();

//Example Hierarchical Inheritance-  multiple different child classes can inherit properties of One parent class.
class bank
{
    roi()
    {
        return 0;
    }
}

class statebank extends bank
{
roi()
{
    return 10.5;
}

}

class axisbank extends bank
{
    roi()
    {
        return 12.5;
    }
}

sbi = new statebank();
console.log(sbi.roi());

axis = new axisbank();
console.log(axis.roi());

//Example Multiple inheritance- A single child can inherit properties of multiple parent class

//JavaScript does not support native multiple inheritance (a class cannot inherit from more than one parent directly).
//using Object.assign(), a pattern known as a Mixin we can copy properties of parent class
//Mixin is a function that adds methods to a class by extending its prototype



const A = {
  hello() {
    console.log("Hello from A");
  }
};

const B = {
  greet() {
    console.log("Hello from B");
  }
};

const c = {};

Object.assign(c, A, B);

c.hello();
c.greet();

//Method overriding - Overriding happens when a child class provides its own implementation of a method that already exists in the parent class.
//Child replaces parent's method

class Animal {
  sound() {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Dog barks");
  }
}

const animal = new Animal();
animal.sound(); // Animal makes a sound

const dog = new Dog();
dog.sound(); // Dog barks , child class Dog overrides the method of parent class Animal


