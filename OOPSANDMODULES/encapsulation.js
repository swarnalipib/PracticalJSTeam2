//Encapsulation - concept that bundles data (properties) and methods (functions) into a single unit while restricting direct access to the internal state.
//Keep data private(protect data) and provide controlled access to it.
//help in code reusability and code maintainance

// Example -

class students
{
    constructor() //We cannot directly access the variables
{
let name,marks;
}

getName()
{
    return this.name; // return the value as name
}

setName(name)
{
this.name=name;  //name will passed as argument and assign  the name value to the variable name.

}

getMarks()
{
    return this.marks;
}

setMarks(marks)
{
    this.marks=marks;
}
}

 let stu = new students();


 stu.setName("john");
 stu.setMarks(245);

 console.log(stu.getName(),stu.getMarks());

 //Example 2  -Private fields (#) provide true encapsulation by restricting direct access to class members from outside the class.

class BankAccount {
    #balance;

    constructor(balance) {
        this.#balance = balance;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount(1000);

account.deposit(500);
console.log(account.getBalance());
//console.log(account.#balance);//Private field cannot be accessed directly
