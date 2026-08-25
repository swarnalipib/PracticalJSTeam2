// For in loop iterates (loops) over the properties of an object. Mostly used for object arrays

//Example1

let person =  
{
    firstname:"swarnalipi",
    lastname:"behera",
    age:35,
    weight:60

};

for (let x in person) //looping through all the property names (keys) of the person object
{
    //console.log(x);
    //console.log(person[x]);
    console.log(x+"   "+person[x]); //x represents the key or property name of an object one by one. Each time the loop runs, x takes the value of a different property name from the person object.
}

//Example 2

const student = {
    name: "Suman",
    class: 6,
    section: "A"
};

for (let y in student)  // loop through the y of student object
    {

    console.log(`${y} => ${student[y]}`);
};


//Example 3 using an array 

let fruits = ["banana", "Orange", "apple", "mango"];
for (let p in fruits)  // loop through the p of student object
    {

    console.log(p+"    "+fruits[p]);
};


