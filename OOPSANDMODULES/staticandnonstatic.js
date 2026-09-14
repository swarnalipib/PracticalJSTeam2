//A static method belongs to the class itself, not to its objects.
//Use the static keyword.
// static means a property, method, or block belongs to the class itself instead of individual objects created from that class

//Example -
class Test
{
    static a =100;
    b=20;


static m1()
{
    console.log("This is static method");
}

m2()
{
    console.log("This is non static method");
}
}
//We access static variable directly using class name 
console.log(Test.a);////accessible 
//console.log(Test.b); //output: undefined
Test.m1(); //accessible 
//Test.m2(); //output test.m2 not a function


//We access nonstatic variable  using object

let t = new Test();
 console.log(t.b);////accessible 
 t.m2();//accessible 
 console.log(t.a); // undefined
 t.m1(); //t.m1 not a function

 //Example 

 class Employee {
  
    static companyName = "Mindfire";
    static employeeCount = 0;

    constructor(name, salary) {
        this.name = name;
        this.salary = salary;

        Employee.employeeCount++; //As employeecount is static it can accessed and updated by class
    }
    displayDetails() {// Non-static method
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
        console.log("Company:", Employee.companyName);//company name is static so calling by class 
    }

    increaseSalary(amount) {   // Non-static method
        this.salary += amount;
        return this.salary;
    }

    static showEmployeeCount() {  // Static method
        console.log("Total Employees:", Employee.employeeCount);
    }

    // salaryRevision()
    // {
    //      console.log(increaseSalary());
    // }
}


let e1 = new Employee("Lipi", 50000);
let e2 = new Employee("Rahul", 60000);
let e3 = new Employee("Amit", 70000);

e1.displayDetails();
e2.displayDetails();

Employee.showEmployeeCount();
console.log("Revised salary ",e1.increaseSalary(1000));
console.log("Revised salary ",e2.increaseSalary(5000));
console.log("Revised salary ",e3.increaseSalary(10000));


//Example -Static and Non-static with inheritance

class Vehicle {

    static vehicleCount = 0;

    constructor(brand) {
        this.brand = brand;

        Vehicle.vehicleCount++;
    }

    start() {   // Non-static
        console.log(this.brand + " vehicle started");
    }

    static showVehicleCount() {    // Static
        console.log("Vehicles created:", Vehicle.vehicleCount);
    }
}


class Car extends Vehicle {

    constructor(brand, model) {
        super(brand);

        this.model = model;
    }

    showCarDetails() {  // Non-static
        console.log(
            "Brand:",this.brand,
            "Model:", this.model
        );
    }

    static carInfo() {
        console.log("Cars are four-wheeled vehicles");
    }
}


let c1 = new Car("Toyota", "Fortuner");
let c2 = new Car("Honda", "City");

c1.start();
c1.showCarDetails(); 

c2.start();
c2.showCarDetails();

Vehicle.showVehicleCount();

Car.carInfo();