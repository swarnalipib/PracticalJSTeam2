//Accessing properties of Object

//Properties are key:value Pairs
//Properties can be changed, added, and deleted.
//Dot notation is the most common and readable way to access properties.To access properties ,write object name, followed by a dot (.), and the property name

//Example 1
const person ={

  firstName: "swarnalipi",
  lastName: "Behera",
  age: 36,
  job: "IT",
  phno: 9999955555,
  nationality:"indian"
};

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.job);
console.log(person.phno);
console.log(person.nationality);
console.log(person.city); //when try to access any other properties which is not mentioned gives 


// can also be written with square bracket to access properties.[]. The property name inside the brackets must be passed as a string as key can have special characters

console.log(person["firstName"]);
console.log(person["lastName"]);
console.log(person["age"]);
console.log(person["job"]);
console.log(person["phno"]);
console.log(person["nationality"]);
console.log(person["city"]);//undefined
console.log(person[1]);//it cannot accessthrough index number its not a array

//-Pass the variable holding the property name inside square brackets.

const k ="job";
console.log(person[k]);//IT
console.log(person.k);// undefined why ?

//Example 2 

const employee = {
  id: 101,
  name: "joy",
  contact: {
    email: "joy@gmail.com",
    phone: "123-456-7890",
    landphone: "011-066552"
  },
  address: {
    city: "Delhi",
    zip: {
      code: 110016,
      suffix: 4432
    }
  }
  
};

console.log(employee.id);
console.log(employee.name);
console.log(employee.contact);
console.log(employee.address);

//to access nested properties 
console.log(employee.contact.email);
console.log(employee.contact.phone);
console.log(employee.contact.landphone);
console.log(employee.address.city);
console.log(employee.address.zip);
console.log(employee.address.zip.code);
console.log(employee.address.zip.suffix);

// Accessing dynamically using a variable
let k1="contact";
console.log(k1);
console.log(employee[k1]["email"]);
console.log(employee[k1]["phone"]);
console.log(employee[k1]["landphone"]);

//Add a new property

employee.gender="female";
employee.address.country="India";//add property a nesterd object
console.log(employee);

//Edit a property
employee.name="swarna";
employee.contact.phone="7777799999";
console.log(employee);

//Delete a property
delete employee.address.country
console.log(employee);

console.log("****************************************")


//Example 2  accessing a method 

const employee1 =
{

empname:"Scott",
empid:1023,
job:"Engineer",
basicsal:50000,
bonus: function( )
{
  return ((this.basicsal * 10)/100);

}
}
console.log(employee1["empname"]);
console.log(employee1.bonus()); //we can access function in this way


//Accessing objects with Array 
const company =[  { name: "Engineering", lead: "Sarah" },
    { name: "Design", lead: "James" },{name:"QA",lead:"Suman"}
  ];

  console.log(company[0]); 
  console.log(company[0].name);
  console.log(company[0].lead);
  console.log(company[1]);
  console.log(company[1].name);
  console.log(company[1].lead);

const obj = company[0].name;
console.log(obj);

const obj1 = company[0].lead;
console.log(obj1);

