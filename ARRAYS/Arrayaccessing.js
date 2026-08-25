//Example1

 let person = ["Suman", "sudha", "mona", "rinky","jaga"];

//Accessing the array
console.log(person);
//Accessing the elements of array 
console.log(person[0]);
console.log(person[1]);
console.log(person[2]);
console.log(person[3]);
console.log(person[4]);

//Insert a new element into array 
person[5]="bobby";
console.log(person);

//Editing an element in an array
 person[3]="Riya"
 console.log(person);

// deleting an element in an array
delete person[4];
console.log(person);

delete person[2];
console.log(person);


console.log(person.length); //no of elements in an array
console.log(Object.keys(person)); //it display the o/p of all elemets indexes
console.log(person[person.length-3]);//print person with index  (no of elements -3)

//Example 2
const colors = ["red", "yellow", "blue"];
colors[5] = "purple";//
console.log(colors);
console.log(colors[4]); //undefined


//array using forloop
for(let k of colors) //
{
    console.log(k);
}

//looping in an array

for(let i=0;i<=colors.length-1;i++)
    {
        console.log(colors[i]);
    } 


//Example 3 with nested arrays

const matrix = [
  [1, 2],
  [3, 4],
  [5,6]
];

//accessing the elements of array 
console.log(matrix[0]);
console.log(matrix[0][0]);
console.log(matrix[0][1]);
console.log(matrix[1]);
console.log(matrix[1][0]);
console.log(matrix[1][1]);
console.log(matrix[2]);
console.log(matrix[2][0]);
console.log(matrix[2][1]);
console.log(matrix.flat());//it will print all elements of nested array
console.log(matrix.flat().toString());//it will print all elements of nested array in string format

//Example 4 -Array of objects

const employees = [{ name: 'Alice',role:"Developer" }, { name: 'Bob',role:"QA" }];

console.log(employees[0].name);
console.log(employees[0].role);
console.log(employees[1].name);
console.log(employees[1].role);
