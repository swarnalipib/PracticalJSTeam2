//STRING METHODS 

//charAt()-returns the character at a specified index (position) in a string

let s="Javascript best language 11";
console.log(s.charAt(0));//print character at index 0
console.log(s.charAt(5));//print character at index 0
console.log(s.charAt(20));//print blank 
console.log(s.charAt(-3));//print blank 
console.log(s.charAt());//print character at index 0 as  it defaults to index 0 and evaluates the first character. 
console.log(s.charAt(null));//print character at index 0
console.log(s.charAt(undefined));//print character at index 0
console.log(s.charAt(NaN));//print character at index 0

//charCodeAt-returns the code of the character at a specified index in a string.returns a UTF-16 code (an integer between 0 and 65535

console.log(s.charCodeAt(0));//print 74
console.log(s.charCodeAt(5));//print 67
console.log(s.charCodeAt(-3));//print NaN
console.log(s.charCodeAt(20));//print NaN
console.log(s.charCodeAt(null));//print 74
console.log(s.charCodeAt(undefined));//print 74
console.log(s.charCodeAt(NaN));//print 74
console.log(s.charCodeAt());///print 74

//toUpperCase()

console.log(s.toUpperCase());//all letters converted to uppercase
console.log(s.toUpperCase(5));//method does not accept any parameters. Passing a number like 5 into the method will simply be ignored, and it will attempt to convert the string to uppercase normally.and will print all letters yto uppercase
console.log(s.toUpperCase(NaN));//for undefined /null/Nan/0/-5 , it prints all letters to uppercase , it ignpore those paramters
console.log("SwarNalIpi".toUpperCase());
console.log("11".toUpperCase());//print 11
let x=11;
//console.log(x.toUpperCase());//type error

//tolowerCase()

console.log(s.toLowerCase());//all letters converted to lowercase
console.log(s.toLowerCase(5));//method does not accept any parameters. Passing a number like 5 into the method will simply be ignored, and it will attempt to convert the string to lowercase normally.and will print all letters yto lowercase
console.log(s.toLowerCase(NaN));//for undefined /null/Nan/0/-5 , it prints all letters to uppercase , it ignpore those paramters
console.log("SwarNalIpi".toLowerCase());
console.log("11".toLowerCase());//print 11
let y=11;
//console.log(y.toLowerCase());//type error

//indexOf()- method returns the position of the first occurrence of a value in a string.And -1 if the value is not found.and is case sensitive
//Scans from left to right; returns the first matching index.
console.log(s.indexOf());//-1 if string emoty or not found
console.log(s.indexOf("best"));//it will print index of first letter of the word that is b
console.log(s.indexOf("language"));//16
console.log(s.indexOf("lang"));//16
console.log(s.indexOf("uage"));//20
console.log(s.indexOf("ge"));//22
console.log(s.indexOf("Java"));//0
console.log(s.indexOf("java"));//-1
console.log(s.indexOf("11"));//25
console.log("swarnalipi".indexOf("li"));//16
console.log(s.lastIndexOf("lipi"));//-1
//console.log(y.indexOf("11"));//typeerror

//lastIndexOf() -(searchvalue,last index) first it search the value if not found then -1 , if found then print 1st letter index
//: Scans from right to left; returns the last matching index
let s1=[10,20,70,90,70,20,50,10,30]
    //  0   1  2  3  4  5  6  7  8
console.log(s1.lastIndexOf());//-1 if string emoty or not found
console.log(s1.lastIndexOf(70));//4
console.log(s1.lastIndexOf(30));//8
console.log(s1.lastIndexOf("30"));//-1
console.log(s1.lastIndexOf("lipi"));//If string not defined -1
console.log(s1.lastIndexOf(70,3));
console.log(s1.lastIndexOf(20,4));
console.log("*************************")

let s2="She is be with be us" //"S h e   i s   b e   w   i  t   h    b  e     u  s"
                                 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19

console.log(s2.lastIndexOf("be"));//15
console.log(s2.lastIndexOf("is"));//4

//substring()-- method extracts characters from a string between two specified indices and returns a brand-new string without modifying the original one

let s3= "SUCCESSFUL"
console.log(s3.substring(1,4)); //it includes the startindex till end index but doesn't include end index
console.log(s3.substring(2,6));
console.log(s3.substring(4)); //if no end index given then it includes till end 
console.log(s3.substring(-1));//returns full string as it count negative value as 0
console.log(s3.substring(4,1));// it will swap to (1,4) o/p
console.log(s3.substring(5,-3));//it count Nan,negative values as 0 then it swaps to (0,5) 

//slice()
console.log(s3.slice(1,4));//count starts from start index and continue till end index but doesn't count end index 
console.log(s3.slice(4,12));
console.log(s3.slice(2));//from start index 2 till end as no end index mentioned
console.log(s3.slice(-3));//fron start index -3 to till end 
console.log(s3.slice(4,-1));
console.log(s3.slice(4,2));//blank/empty string if startindex is greater than end index

//substr()- starts (startindex ,count)
console.log(s3.substr(1,4));
console.log(s3.substr(4,1));
console.log(s3.substr(1,-4));//empty string as end index is counting no 
console.log(s3.substr(4)); //startindex till end
console.log(s3.substr(-4));//startindex till end
