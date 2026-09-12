//polymorph means many forms ..Different classes canhave same method name but provide different implementation
// It allows different objects to respond to the same method name in their own unique way

//Example - same method name draw() but different implementations


class shape
{
    draw()                // parent method
{
    return "This is a shape";

}
}


class square extends shape
{
    draw()                      // Overrides parent method
{
    return "This is a square";

}
}

class circle extends shape
{
    draw()                      // Overrides parent method
{
    return "This is a circle";     

}
}

let c = new shape();
console.log(c.draw());

c = new square();
console.log(c.draw());

c= new circle();
console.log(c.draw());

//Example 2 

class Animal {
  makeSound() {
    console.log("Generic animal sound");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Woof! Woof!"); // Overrides parent method
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Meow!"); // Overrides parent method
  }
}

function activateAnimal(animal) {     // A single function can handle any object inheriting from Animal
  animal.makeSound(); 
}

activateAnimal(new Dog()); // Output: Woof! Woof!
activateAnimal(new Cat()); // Output: Meow!
