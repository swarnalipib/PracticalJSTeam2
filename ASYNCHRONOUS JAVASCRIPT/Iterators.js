//Iterators(objects) -They must have a next() method that returns an object with the value and done properties.
//The value property represents the next value in the sequence and the done property indicates whether there are more values to be iterated.
//value ->current value 
//false ->more values available to be iterate, true->iteration finished



//Example -Basic array iterator
const colors = ['red', 'green', 'blue'];
const c = colors[Symbol.iterator]();
console.log(c.next());
console.log(c.next());
console.log(c.next());
console.log(c.next());

//Example - to print only value

console.log(c.next().value);//undefined  Subsequent calls (c.next().value) on an already finished iterator return undefined.
console.log(c.next().value);//undefined
console.log(c.next().value);//undefined
console.log(c.next().value);//undefined 

//so correct one
const colors1 = ['red', 'green', 'blue'];
const c1 = colors1[Symbol.iterator]();
console.log(c1.next().value);//red
console.log(c1.next().value);//green
console.log(c1.next().value);//blue
console.log(c1.next().value);//undefined


//Example 2 - strings iterable

const str = "JAVASCRIPT"
const i = str[Symbol.iterator]();

console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());

//Example 3.using for ...of

const fruit =["Apple","Banana","Mango"];
const iterator = fruit[Symbol.iterator]();

let result = iterator.next();

while(!result.done) //until array have elements lefts to loop and once reached then stop and exit
{
    console.log(result.value);
    result = iterator.next()
}

//Example 4 set iterator 

const number = new Set([10,20,30]);

const iterator1 = number[Symbol.iterator]();

console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());

//Example 5 Map iterator 
const user =new Map([["name","swarna"],["age","35"],["id","101"]]);
const iterator2 = user[Symbol.iterator]();

console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());

//Example 6 iterator with manual next ()

const num = [100,200,300];
const iterator3 = num[Symbol.iterator]();

let res = iterator3.next();
console.log(res.value);

res = iterator3.next();
console.log(res.value);

res = iterator3.next();
console.log(res.value);

res = iterator3.next();
console.log(res.value);

//example 7 Custom Iterator in JavaScript

const myObject = {
  values: [10, 20, 30],
  [Symbol.iterator] () {
    let index = 0;
    return {
      next: () => {
        if (index < this.values.length) {
          return { value: this.values[index++], done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
};

for (const value of myObject) {
  console.log(value);
}

//Example 8 custom iterator that generates even numbers 

const evenNum = {
    start: 2,

    [Symbol.iterator] () {
    let index = 0;
    return {
      next: () => {
        const value = this .start;
        this.start +=2;
        return {
            value,done: value>10
        };
    }

};
}
};

for (const value of evenNum) {
  console.log(value);
}

//Example 9 -count the vowels in string using iterator

let string = "JAvascript programming"

let iterator4 = string[Symbol.iterator]();
let result1;
let vowels=0;

while (!(result = iterator4.next()).done) 
{
    let ch = result.value;

    if ("aeiouAEIOU".includes(ch))
    {
        vowels++;
    }
}
console.log("Number of vowels:", vowels);

//Example 10 -convert lowercase to uppercase using iterator 

let string1 = "JAvascript programming"

let iterator5 = string1[Symbol.iterator]();
let result2;
let newString="";

while (!(result = iterator5.next()).done) 
{
    newString += result.value.toUpperCase();
}
console.log(newString);

