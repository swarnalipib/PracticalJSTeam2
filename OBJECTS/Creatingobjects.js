//Objects - instance of a class-The data variables and functions stored inside the object (the "keys").

//Ways to Create objects 

//1.Using object literal -create an object by literally writing out its contents inside curly braces {}. It allows you to declare a standalone object and define its data and behavior on the fly without using classes or constructor functions
const car = {
  brand: "Toyota",       
  model: "Model ZXO",  
  year: 2026,         
  isElectric: true,   
  start: function() {  
    console.log("hybrid engine started...");
  }
};

console.log(car.brand);
console.log(car.year);
console.log(car.isElectric);
car.start();

//2.Using Classes

class employee {
    constructor(empname, empid, empcity) {
        this.empname = empname;
        this.empid = empid;
        this.empcity = empcity;
    }
}

const obj = new employee("swarnaT", "112", "delhi");

console.log(obj.empname);
console.log(obj.empid);
console.log(obj.empcity);

//3.Using Constructor Functions -  new keyword is used to create multiple objects 

function Vehicle(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
}

const car1 = new Vehicle("Hycross", "Inova", "ZXO");

console.log(car1.name);
console.log(car1.maker);
console.log(car1.engine);

//4.using  Object.create() is a method used to create a new object and link it directly to an existing object as its prototype

const person = {
  isHuman: false,
 personintro() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

const obj1 = Object.create(person);

obj1.name = "Swarna"; // "name" is a property set on "obj1", but not on "person"
obj1.isHuman = true; // Inherited properties can be overwritten

obj1.personintro();
// Expected output: "My name is Matthew. Am I human? true"