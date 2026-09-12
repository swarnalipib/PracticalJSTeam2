//Method overloading - Not supposted by Js, Overloading means having multiple methods with the same name but different parameters.
// allows a class to have multiple methods with the same name but different parameter 

//Example -

class Calculator {
  add(a, b) {
    if (b === undefined) {
      return a + 10;
    }
    return a + b;
  }
}

const calc = new Calculator();

console.log(calc.add(5));      // 15
console.log(calc.add(5, 10));  // 15

//Method overriding -Overriding happens when a child class provides its own implementation of a method that already exists in the parent class.

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

sbi = new statebank(); //sbi and axis overrides the parent class bank method
console.log(sbi.roi());

axis = new axisbank();
console.log(axis.roi());