//JavaScript has public and private members natively, but it does not have a true protected keyword

//Public class -Public members can be accessed from anywhere(inside and outside the class)

//Example - Here the variable and the method can be access from outside the class

class Person {
  name = "Lipi";

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

const p = new Person();

console.log(p.name); // Lipi
p.greet(); // // Hello Lipi 

//Example -

class Person {
  name = "Lipi";

  greet() 
  {
    console.log(`Hello ${this.name}`);
  }
}

class female extends Person
{
   showGreet()
   {
    console.log(`Hello my name is ${this.name}`);// using this.name outside the parent class is allowed as it is public
   }
}

const p1 = new Person();

console.log(p1.name); // Lipi
p1.greet(); //Hello Lipi

const p2 = new female();
p2.greet(); //Hello Lipi Child class can access data of parent class

//Private class -They can be accessed only inside the class.They cannot be accessed outside of class and cannot access by child class
//Private members are declared using #.

//Example -

class bankAccount {
    #balance = 1000;
    
    deposit(amount){
        this.#balance=+amount;
    }

    getBalance(){
        return this.#balance;
    }
}

const acc = new bankAccount();
console.log(acc.getBalance());//It can access data
//console.log(acc.#balance);//error not accessible outside the class

//Example with parent child class - child class cannot access private data of parent class

class Parent {
  #salary = 50000;

  showSalary() {
    console.log(this.#salary); // Parent can access
  }
}

class Child extends Parent {
  showChildSalary() {
   // console.log(this.#salary); // Error  using this.#salary outside the parent class is not allowed 
  }
}

const c = new Child();

c.showSalary(); // 50000 //child can access property of parent but cannot use in its class

c.showChildSalary();//  Error: Private field '#salary' must be declared in the parent class

//protected class - JavaScript does not have a built-in protected keyword.
//js represent protected properties using _

//Example - So _name behaves like protected by convention, but JavaScript does not enforce it.so technically we can access inside and outside the class

class Animal {
  _name = "Animal";

  showName() {
    console.log(this._name);
  }
}

class Dog extends Animal {
  showDogName() {
    console.log(this._name); // using this.name outside the parent class is allowed technically as js doesn't enforce it
  }
}

const dog = new Dog();

dog.showDogName();//Animal data  of parent class is accessible by child class
dog.showName();//Animal
