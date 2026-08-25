console.log ("*********************Example 1*******************************")

let d1 = Date.now();//Date.now() returns the number of milliseconds since January 1, 1970.
console.log(d1);

const timestamp = new Date();
const dateobject = new Date(timestamp);
console.log(dateobject.toUTCString()); 
console.log(timestamp.getFullYear());
console.log(timestamp.getMonth()); //returns month 1 less than current month as it takes january as 0-
console.log(timestamp.getDay()); //returns the day of the week (0 to 6) of a date.
console.log(timestamp.getDate());//day of the month is printed

console.log ("*********************Example 2*******************************")
//Extracting date components
const christmas = new Date("2026-12-25T23:15:30");
const day = christmas.getDate();
const month = christmas.getMonth(); //it count january as 0 so 1 less in month number
const year = christmas.getFullYear();
const hour = christmas.getHours();
const minute = christmas.getMinutes();
const second = christmas.getSeconds();
const milliseconds= christmas.getMilliseconds();

console.log(day); ////day of the month is printed
console.log(month);
console.log(year);
console.log(hour);
console.log(minute);
console.log(second);
console.log(milliseconds);


console.log ("*********************Example 3*******************************")

//Different time zones
//const date1 = new Date("August 18, 2026 23:15:30 GMT+5:30");
//const date2 = new Date("August 18, 2026 23:15:30 GMT-7:00");
const date1 = new Date("May 31, 2026 23:30:00 GMT+12:00");
const date2 = new Date("June 1, 2026 23:30:00 GMT-12:00");
console.log(date1.getUTCDate());
console.log(date2.getUTCDate());

console.log(date1.getUTCDay());
console.log(date2.getUTCDay());

console.log(date1.getUTCMonth());
console.log(date2.getUTCMonth());

console.log(date1.getUTCFullYear());
console.log(date2.getUTCFullYear());

console.log(date1.getUTCHours());
console.log(date2.getUTCHours());

console.log(date1.getUTCMinutes());
console.log(date2.getUTCMinutes());

console.log(date1.getUTCSeconds());
console.log(date2.getUTCSeconds());

console.log ("*********************Example 4*******************************")

//formatting date into strings

const event = new Date("18 August 2026 14:48 UTC");
console.log(event.toString()); //date time ist
console.log(event.toISOString()); //iso format
console.log(event.toDateString()); //only date no time

const event1 = new Date(1993, 6, 28, 14, 39, 7);
console.log(event1.toString());
console.log(event1.toDateString());

//const event2 = new Date("18dAugust872026 14:48 UTC"); //invalid date
//console.log(event2.toString()); //error :invalid date
//console.log(event2.toISOString()); //range error

console.log ("*********************Example 5*******************************")
//Calculate the difference in years and months

const date3 = new Date('1999-11-15');
const date4 = new Date('2026-03-10');
const yearDiff = date4.getFullYear() - date3.getFullYear();
const mdiff = date3.getMonth()-date4.getMonth();
const monthdiff = ((yearDiff) * 12) - mdiff;

console.log(yearDiff);
console.log(monthdiff);


// Modifying and Manipulating Dates

const d = new Date('2026-01-01');

d.setDate(d.getDate()+5);//move the day  by 5 or add 5 days
console.log(d.toDateString());

d.setDate(d.getDate()-5); //subtract 5 days
console.log(d.toDateString());

d.setFullYear(2028);
console.log(d.toDateString()); //changing the year

d.setMonth(6);
console.log(d.toDateString()); //changing the month from mar to june