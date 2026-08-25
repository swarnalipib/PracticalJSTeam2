//DATATYPES

//1.Number -A number representing a numeric value

let n1 = 2;
console.log(n1)
console.log(typeof(n1));

let n2 = 2.1;
console.log(n2)
console.log(typeof(n2));

//2.String -A text of characters enclosed in quotes

let s1= "This is learning";
console.log(s1)
console.log(typeof(s1));

let s2= "25aa";
console.log(s2)
console.log(typeof(s2));

//3.Boolean --A data type representing true or false

let b1= true;
console.log(b1)
console.log(typeof(b1));

let b2= false;
console.log(b2)
console.log(typeof(b2));

//4. Undefined -A variable with no assigned value

let u1;
console.log(u1)
console.log(typeof(u1));

//5.Null - A value representing object absence

let n3 = null;
console.log(n3)
console.log(typeof(n3));

//6.Bigint -A number representing a large integer

let n4 =BigInt("1234567890123456789012345");
console.log(n4)
console.log(typeof(n4));

let n5 =45234567890123456789012345n;
console.log(n5)
console.log(typeof(n5));

//7.Date- Object for working with dates and times

let date = new Date();
console.log(date)
console.log(typeof(date));

let specificdate = new Date("2026-08-17");
console.log(specificdate)
console.log(typeof(specificdate));

let d1 = Date.now();//Date.now() returns the number of milliseconds since January 1, 1970.
console.log(d1);

const timestamp = new Date();
const dateobject = new Date(timestamp);
console.log(dateobject.toUTCString());
console.log(timestamp.getFullYear());
console.log(timestamp.getMonth());
console.log(timestamp.getDay());
console.log(timestamp.getDate());

