//String Comparision And Manipulation
//JavaScript strings are immutable primitives, meaning any manipulation method always returns a new string rather than modifying the original one

//string comparision
//1. Strict vs. Loose Equality (=== vs ==)

const str1 = "10";
const str2 = 10;

console.log(str1 === str2); // false (string vs number)
console.log(str1 == str2); //true (it checks only the value not the type)

const str3 ="JAVA"
const str4 ="java"
console.log(str3 === str4); //false string comparisons are case-sensitive, meaning uppercase and lowercase letters are treated as completely different characters.
console.log(str3 == str4); //false values are different for uppercase and lowercase letters

//Example - Function to compare s1 and s2

function compareStrings(s1, s2){
       if(s1 == s2)   // This condition will return true only if s1 and s2 hold true from equality
        {
        return 'Both strings are equal';
    }
    
    return 'Both strings are not equal';
}


console.log(compareStrings('Javascript', 'JavaScript'));//false , here s2  argument s is in uppercase, case senstive
console.log(compareStrings('Javascript', 'Javascript'));//true
console.log(compareStrings('JavaSCRIPT', 'JavaScript'));//false
console.log(compareStrings('Javascript','typescript')); //false
console.log(compareStrings('Javascript'.toUpperCase(), 'JavaScript'.toUpperCase()));//true
console.log(compareStrings('Javascript'.toUpperCase(), 'JavaScript'.toLowerCase()));//false
console.log(compareStrings('Javascript'.toLowerCase(), 'JavaScript'.toLowerCase()));//true

console.log("***************************************************")

//2.Comparing strings using Relational Operators (<, >, <=, >=)

function compareStr(s1, s2){
    
    if(s1.length > s2.length){
        return `String a is greater than string b`;
    }else{
        return `String b is greater than string a`;
    }
}

console.log(compareStr('javascript','typescrit')); // 'String a is greater to string b'
console.log(compareStr('javascript','java')); //'String a is greater to string b'
console.log(compareStr('javascript','JAVASCRIPTTT')); //'String b is equal to string a'

//More Examples -
//JavaScript evaluates relational comparison character-by-character using Unicode (ASCII) values.
console.log("mango">"apple");//true  as m has bigger Ascii code than a
console.log("Apple">"apple");//false as Uppercase letters have lower Unicode values than lowercase letters ("A" is 65, "a" is 97)
console.log("mango">"spple");

//3.Case-Insensitive Comparison
const t1 = "JAVA";
const t2 = "JaVa";

console.log(t1.toLowerCase() === t2.toLowerCase()); //true
console.log(t1.toLowerCase() === t2.toUpperCase()); //false
console.log(t1.toUpperCase() === t2.toUpperCase()); //true

//4.localeCompare()-compares two strings in the current locale.returns sort order -1, 1, or 0 (for before, after, or equal).
// The current locale is based on the language settings of the browser.-1 can differ in other browser and can display as -2

const c1 = "ab";
const c2 = "cd";
console.log(c1.localeCompare(c2));// in ab and cd , 1st letter a comes before c so it prints -1

const c3 = "try";
const c4 =  "rat";

console.log(c3.localeCompare(c4));// in t comes after r so it prints +1
console.log(c3.localeCompare(c3));// 0 as it compares with itself which is same try with try

const c5 = "try";
const c6 =  "tryko";
console.log(c5.localeCompare(c6));// as try comes before tryko so -1 

const c7 ="banana";
const c8 ="back";
console.log(c7.localeCompare(c8));//+1 as ban comes after bac

const c9 = "apple";
const c10 ="Apple";
console.log(c9.localeCompare(c10));//small case comes before upper case -1

//using localeCompare() Method to sort the elements.
const c11 = ['jav', 'python', 'css', 'html',];
const a = c11.sort((a, b) => a.localeCompare(b));
console.log(a); // Returning sorted elements

//Example of a program using localeCompare

const ss1 = "apple";
const ss2 = "banana";

const res = ss1.localeCompare(ss2)

if (res === 0) {
    console.log("Strings are equal");
} else if (res < 0) {
    console.log("ss2 is greater");
} else if (res > 0) {
    console.log("ss1 is greater");
}

console.log("**********************************")

//5. Replacement/modifying the strings (replace, replaceAll)

//replace() -replaces a part of the given string with another string
const r1 = "apple, mango, grapes";
console.log(r1.replace("apple","plum"));
console.log(r1.replace("cherry","mango"));//it doesn't find string no change
console.log(r1.replace("apple","pine","bb"));//it chnages pine with 1st element but third one remain unchanged


const text = "one fish, two fish, red fish, blue fish"
result = text.replace("fish", "bird", 2); //counts till 2
console.log(result);//one bird,two bird,red fish,blue fish
result = text.replace("fish", "bird", 6);//it ignore 6 count as it doesn't exist and print the 1st word as bird 

const text1 = "  Hello Java!  "
const result1 = text1.replace(" ", "").replace("Java", "Javascript") //mutipletimes replace can be used

console.log(result1);


////replaceAll() -replaces a part of the given string with another string
const r2 = "car,bus,train,bus,plane,van,scooter,bus,car"
console.log(r2.replace("bus","plum"));//it only change 1st seach it get from left to right not all bus
console.log(r2.replaceAll("bus","cycle"));//it change all places where bus exist
console.log(r2.replace("car","cycle"));

const phone = "555-123-4567"
const p = phone.replaceAll("-", "")
console.log(p);// 5551234567

//6.string concat- joins two or more strings.

const con1= "swarna";
const con2= "is testing";
console.log(con1.concat(con2));
console.log(con1.concat(" ",con2));//it gives a space between 2 phrases
console.log(con1.concat(3,con2));
console.log(con1.concat(" ","The QA"," ",con2));

const con3= " JAVASCRIPT";
console.log(con1.concat(con2,con3));


6. //slice()
const text3 = "JavaScript";
console.log(text3.slice(0, 4));   // "Java"
console.log(text3.slice(-5));// cript


