//Object methods

const user = {
  firstName: "John",
  lastName: "Dae",

  sayHello() {
    return `Hello, my name is ${this.firstName}!`;
  }};

console.log(user.sayHello());

//this keyword

//Example1
const person = {
  firstName: "swarnalipi",
  lastName: "Behera",
  age: 35,
  fullName: function() {
    return this.firstName + " " + this.lastName; 
}
};

console.log(person.fullName());
//console.log(person.fullname)//[Function: fullname] error

//if you don't add this it throws error firstname and lastname is not defined
//this refers to the person object                                           
//this.firstName means the firstName property of the person object and this.lastName means the lastName property of the person object

console.log("Fullname of person:"+"  "+person.fullName());

// Built-in Static Object Methods

//Object.keys(obj) ->Returns an array of an object's keys/property names.

console.log(Object.keys(person));

//Object.values(obj) ->Returns an array of an object's values.

console.log(Object.values(person));

//Object.entries(obj)->Returns an array of key-value pairs

console.log(Object.entries(person));