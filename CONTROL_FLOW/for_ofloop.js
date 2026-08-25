//for..of loop iterates over the values of the objects

//Example 1

const fruits = ['Apple', 'Banana', 'Orange',"grapes","watermelon"];

for (const x of fruits) {
 console.log(x);
}

//Example 2

const message = "swarnalipi";

for (const char of message) {
  console.log(char);
}

//Example 3

const a = [10, 20, 30];

for (let value of a) {
  value += 1;
  console.log(value);
}

//Example 4

const student = {
    name: "Suman",
    class: 6,
    section: "A"
};
for (let b of Object.values(student)) {

  console.log(b); //it will throw type error student is a object cannot iterable
}