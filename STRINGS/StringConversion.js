//String Conversion

//1.Converting Numbers to Strings
console.log("******************numbers to strings*********************")

 //global method String() can convert numbers to strings.

 let num=10;
 let num2=20;
 s=String(num);
 console.log(typeof(num));//number
 console.log(typeof(s));//string

 s1=num+num2
 console.log(typeof(String(s1)));//string

 console.log(typeof(String(123)));//string
 console.log(typeof(String(10+20)));//string

 //using truthy-falsyvalues

console.log(typeof(String(-1)));//-1 ,string
console.log(typeof(String(false)));//0,string
console.log(typeof(String(true)));//1,string
console.log(typeof(String(NaN)));//NaN,string
console.log(typeof(String(undefined))); //undefined,string
console.log((typeof(String(null))));//null, string

//using toString()
console.log(typeof(num.toString()));
console.log(typeof(s1.toString()));
console.log(typeof((123).toString()));
console.log(typeof((100+20).toString()));

//using template literal ${}
const c=34;
const temp = `${c}`;
console.log(temp); //34
console.log(typeof(temp));//string

//Concatenating an Empty String

const c1=30;
const temp1= c1 + "";
console.log(temp1);
console.log(typeof(temp1)); //string

//using toExponential()
const num3 = 12345.678;
console.log(num3.toExponential());//1.2345678e+4
console.log(typeof num3.toExponential()); // string

//using toFixed() - it round the decimal number
const num4 = 12345.678;
console.log(num4.toFixed());//12346
console.log(typeof num4.toFixed()); // string


//Converting Strings to Numbers
console.log("******************Strings to Numbers*********************")

//Using Number to convert to strings

 let str1="Swarnalipi";
 let str2="testing";
n=Number(str1);
console.log(n);//when string converted to number it gives NaN
console.log(typeof(Number(str1)));//number
console.log(typeof(n));//number
console.log(typeof(Number(str1+str2)));//number

console.log(typeof(Number(123)));//number
console.log((typeof(Number(10+20))));//number
console.log((typeof(Number('10+20'))));//number NaN
console.log((typeof(Number('23'))));//number 23
console.log(typeof(Number("swarna")));//number - NaN
console.log(typeof(Number('  3.14  ')));//number,3.14
console.log(typeof(Number('0.0314E+2')));//3.14
console.log(typeof(Number('212')));//212
console.log(typeof(Number("2124")));//2124
console.log(typeof(Number("1.224")));// 1.224 number
console.log(Number(""));//0

//using truthy-falsy values

console.log(typeof((Number(undefined))));//NaN ,number
console.log(typeof((Number("undefined"))));//NaN ,number
console.log(typeof((Number(NaN))));//NaN ,number 
console.log(typeof(Number(null)));//0 ,number - diff for parseint it is NaN
console.log((Number(-1)));//-1 ,number
console.log((Number(false)));//0,number - difffor parseint it is NaN
console.log((Number(true)));//1,number - diff for parseint it is NaN

//Using the parseInt()  parses a string and returns an integer (whole number)
console.log((parseInt(12.998)));//12
console.log(typeof(parseInt('12'))) // 12,number
console.log(typeof(parseInt('12.092'))) // 12.092,number
console.log(typeof(parseInt('  3.14  '))) // 3,number diff number
console.log(typeof(parseInt('0.0314E+2'))) // 0,number diff number
console.log(typeof(parseInt('John Doe'))) // NaN,number

console.log((parseInt(12.998))); //12 ->for parse float it is 12.998
console.log((parseInt(null)));//NaN ->same for parse float
console.log((parseInt(undefined)));//NaN >same for parse float
console.log((parseInt(NaN)));//NaN >same for parse float
console.log((parseInt(false)));//NaN >same for parse float
console.log(parseInt("997da-00xj-2343f-234ks"));// 997
console.log(parseInt(""));//NaN for empty string

//using the parseFloat()- parses a string and returns a floating-point number (a number with decimal places)
console.log((parseFloat(12.998)));//12.998
console.log((parseFloat('12'))) // 12,number
console.log(parseFloat('12.092')) // 12.092,number
console.log(parseFloat('  3.14  ')) // 3.14,number
console.log((parseFloat('0.0314E+2'))) // 3.14,number
console.log(parseFloat('John Doe')) // NaN,number
console.log(parseFloat("997da-00xj-2343f-234ks"));// 997
console.log(parseFloat(""));//NaN for empty string

//Using the Math.floor() convert a string into a number.

const m="12.90";
const m1="100";
const m2 = "0.0314E+2";
const m3 = "'John Doe'";
const m4 = null;

console.log(Math.floor(m),typeof(Math.floor(m))); // it shows 12 as whole , no decimalpoint
console.log(Math.floor(m1),typeof(Math.floor(m1)));//100
console.log(Math.floor(m2),typeof(Math.floor(m2)));//3
console.log(Math.floor(m3),typeof(Math.floor(m3)));//NaN
console.log(Math.floor(m4),typeof(Math.floor(m4)));//0
console.log(Math.floor(""));//empty string gives 0

//using Math.round() convert a string into a number.

console.log(Math.round(m),typeof(Math.round(m)));//it round the number 12.90 to 13
console.log(Math.round(m1),typeof(Math.round(m1)));100
console.log(Math.round(m2),typeof(Math.round(m2)));//3
console.log(Math.round(m3),typeof(Math.round(m3)));//NaN
console.log(Math.round(m4),typeof(Math.round(m4)));0
console.log(Math.round(""));//empty string gives 0

//Using the Unary Plus Operator (+) - convert string to number precedes a single operand and attempts to convert it into a number
console.log(+'100'); // 100 ,number
console.log(+'100.0373'); // 100.0373,number
console.log(+''); // 0,number
console.log(+null); // 0
console.log(+true); // 1
console.log(+false); // 0
console.log(+'John Doe'); // NaN
console.log(+'0.0314E+2'); // 3.14

console.log("************************String to Array*********************************");

//3.Converting string to Array 

//Using split method

const str = "Javascript";
console.log(str.split(''));
console.log(str.split('',4));//[ 'J', 'a', 'v', 'a' ]

//Using Spread Operator(...) allows an iterable—such as an array, object, or string—to be expanded into individual elements or properties
const str3 = "world";
const array = [...str3];
console.log(array);//[ 'w', 'o', 'r', 'l', 'd' ]

//Using Array.from() Method
console.log(Array.from(str));
console.log(Array.from(str3));

console.log("***********************String Concatenation****************************")

//4 +-string and numbers (String Concatenation)

console.log("5" + 2,typeof("5" + 2)); //52 ,string
console.log("5" - 2,typeof("5" - 2)); //3 ,number (JavaScript prioritizes numeric subtraction,multiplication, division and convert string into a number to perform the math.)
console.log("5" * 2,typeof("5" * 2)); //10 ,number
console.log("5" / 2,typeof("5" / 2)); //2.5 ,number
console.log(10 + 20 + "3",typeof(10 + 20 + "3"));//33,string
console.log("3" + 10 + 20,typeof("3" + 10 + 20));//31020,string
console.log("10" * "2",typeof("10" * "2"));//20,number
console.log("10" - "2",typeof("10" - "2"));//8,number
console.log("10" / "2",typeof("10" / "2"));//5,number
console.log("10" + "2",typeof("10" + "2"));//102,string
console.log("five" - 1,typeof("five" - 1));//NaN,number

//truthfalsy values

console.log("5"+"true",typeof("5"+"true"));//5true string . same with false
console.log("5"+true,typeof("5"+true));//5true string, same with false
console.log("5"-true,typeof("5"-true));//4,number
console.log("5"-"true",typeof("5"-true));//NaN,number as true is in quoted behaves as string converting to number will be NaN
console.log("5" * "true",typeof("5"*true));//if true is in quoted for multiplication,division,subtraction , it will NaN,number
console.log("5"-NaN,typeof("5"-NaN));//NaN , number(same for *,/)
console.log("5"-undefined,typeof("5"-undefined));//NaN,Number converting undefined is NAN (equal for *,/)
console.log("5"+NaN,typeof("5"+NaN));//5NaN , string (same for undefined)
console.log("5"+null,typeof("5"+null));//5null
console.log("5"-null,typeof("5"-null));//5,number
console.log("5"*null,typeof("5"*null));//0,number
console.log("5"/null,typeof("5"/null));//infinity,number
console.log(true+true,typeof(true+true));//2,number(here both operands are booleans so Js convert booleans into number for addition)
console.log(true+false,typeof(true+false));//1
console.log(false+false,typeof(false+false));//0
console.log(false+NaN,typeof(false+NaN));//NaN(same for -,*,/)
console.log(true*undefined,typeof(true*undefined));//NaN (same for +,-,/)
console.log(true+null,typeof(true+null));//1,number(as true is boolean +null)
console.log(true-null,typeof(true-null));//1,number
console.log(true*null,typeof(true*null));//0,number
console.log(true/null,typeof(true/null));//Infinity,number
console.log(null+null,typeof(null+null));//0,number same for *,-
console.log(null/null,typeof(null/null));//NaN,number (for multiplication-,subtraction,division -0)
console.log(null+NaN,typeof(null+NaN));//NaN,number
console.log(null+undefined,typeof(null+undefined));//NaN,number same for -,*,/
console.log(undefined+undefined,typeof(undefined+undefined));// NaN,number same for -,*,/
console.log(NaN+NaN,typeof(NaN+NaN));//NaN,Number same for -,*,/
console.log(NaN+undefined,typeof(NaN+undefined));//NaN,Number
console.log("5"+NaN+0+"5",typeof("5"+NaN+0+"5"));//5NaN05,string
console.log(5+null+0+"5",typeof("5"+null+0+"5"));//55,string
console.log(true+null+"5"+8,typeof(true+null+"5"+8));//158, string
console.log("5"+null+10+true+20,typeof(true+null+"5"+8));//5null10true20 string
console.log(null+10+true+"20",typeof(true+null+"5"+8));//1120 string


//using unary +operator

let strV = "42";
let v = +strV; // Converts "42" to the number 42 using unary operator

console.log(v + 8); // Output: 50 (Instead of "428")