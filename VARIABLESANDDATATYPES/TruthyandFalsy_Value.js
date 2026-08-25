//A falsy value evaluates to false, while a truthy value evaluates to true

//truthy values
console.log("*****TRUTHY VALUES *****")
console.log(Boolean(10)); //numbers
console.log(Boolean(-10)); //negative numbers
console.log(Boolean(1.24)); //decimal numbers
console.log(Boolean("swarnalipi")); //string
console.log(Boolean(true));  //Boolean values
console.log(Boolean("0")); //string value
console.log(Boolean("   "));  //string containing space
console.log(!!"world"); //using negation operator
console.log(Boolean("undefined")); //double quoted means string
console.log(Boolean(10n)); //bigintvalues
console.log(Boolean({})); //empty curly braces
console.log(Boolean([])); //empty array


console.log("***************************************************************");
//falsy values
console.log("*****FALSY VALUES *****")
console.log(Boolean(false)); //Boolean values
console.log(Boolean(0)); //zero value
console.log(Boolean(-0)); //negative zero
console.log(Boolean("")); //Empty string
console.log(Boolean(null)); //null value
console.log(Boolean(undefined)); //undefined
console.log(Boolean(NaN)); //NaN
console.log(Boolean(0n)); //bigint