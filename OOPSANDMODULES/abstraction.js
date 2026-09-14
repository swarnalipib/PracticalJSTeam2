//Abstraction-Abstraction can be defined as the concept of hiding the inner complex workings of an object and exposing only the essential features to the user. 
//Useful in hiding the complexity,security,reusability,better code quality 
//Abstraction can be used to create the APIs where the only necessary functionality is exposed and internal logic is hidden.
//Abstraction is achieved by using Classes with Private Class Features(use private fields and methods (#) to hide the internal, messy operations of an object.


//Example -

class CoffeeMachine {
    makeCoffee() {
        this.#boilWater();
        this.#brewCoffee();

        console.log("Coffee is ready!");
    }

    #boilWater() {
        console.log("Boiling water...");
    }

    #brewCoffee() {
        console.log("Brewing coffee...");
    }
}

const coffee = new CoffeeMachine();
coffee.makeCoffee(); //The user only calls makeCoffee().The implementation details are abstracted from the user.
//Internal methods #boilWater() and #brewCoffee() are hidden.

//Example - Using a Simple Function (You do not need classes to use abstraction. A simple function hides  logic)

function calculateFinalPrice(price, tax) { //// Hidden complex logic inside the function
  let extraFee = 5;
  let totalTax = price * tax;
  return price + totalTax + extraFee;
}

let finalCost = calculateFinalPrice(100, 0.1); // What the user sees and uses: a simple call
console.log(finalCost);