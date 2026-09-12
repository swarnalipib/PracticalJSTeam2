//constructors are special functions used to initialize and create objects. They are executed using the new keyword
//Adv -Promote Reusable Code,Constructors enable inheritance, allowing child objects to inherit properties and methods from parent constructors.,Object Initialization: Constructors make it easy to initialize objects with specific values (via parameters) when creating new instances.
//In JavaScript, objects can be created without a formal constructor.
//If you don't provide a constructor function, JavaScript still creates an object for you, and it essentially has an "invisible" default constructor.

//Example Class Constructors:

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    display()
{
    console.log(this.make,this.model);
}
}

const myCar = new Car("Toyota", "1967");
myCar.display();

//Example Default constructor -an empty constructor that the JavaScript engine automatically provides to a class if you do not explicitly define one
//a default constructor (which accepts no arguments

class student 
{
    constructor()
        {
    this.name ="rahul";
    this.age= 20;
        }
    
           display()
{
    console.log(this.name,this.age);
}
}

let s =new  student();
s.display();

//Example -Parameterized constructor  a special method used to initialize an object with dynamic, user-provided values at the moment the object is created. 
//a parameterized constructor accepts parameters, allowing you to create multiple distinct objects using the same blueprint
// define a parameterized constructor using the explicit constructor keyword inside a class

class student 
{
    constructor(name,age)
        {
    this.name =name;
    this.age= age;
        }
    
           display()
{
    console.log(this.name,this.age);
}
}

let s1 =new  student("rahul",20);
s1.display();
let s2 =new  student("swarna",35);
s2.display();

//Example -Constructor Functions - using standard functions invoked with the new keyword


    function user(name,age)
        {
    this.name =name;
    this.age= age;
        }
    


let s3 = new user("rahul",20);
console.log(s3);
let s4 = new user("swarna",35);

//Example - Object Constructors: -JavaScript objects themselves can serve as constructors when combined with the new keyword.

const carobj = {

    createCar: function (make,model)
    {
        const car = {};
        car.make = make;
        car.model = model;
        return car;
    }
};
const myCar1 = new carobj.createCar("Toyota", "1926");
console.log(myCar1);

//Example Arrow Function Constructors:

const Car = (make, model) => {
    this.make = make; // 'this' will not work as expected in arrow functions
    this.model = model;
};

const myCar2 = new Car("Toyota", "Camry");
console.log(myCar2);

//Example Constructor with inhertance using super

class Person {

    constructor(name){
        this.name= name;
    }
}
class Employee extends Person {
    constructor(name,salary)
    {
        super(name); //Super keyword will call the parent class constructor and this method is used for accessing the name from the construtor of class person
        this.salary = salary;
    }

display() {
    console.log("Name:", this.name);
    console.log("Salary:",this.salary);
}

}

let e = new Employee("Swarna",50000);
e.display();