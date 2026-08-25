console.log("*********************COMPARISION OPERATOR***************")

console.log("*************equality operator(==)*****************");
//1.equality operator- it compare the equality of two operands and shows the o/p in true/false

let x=10;
let y="10";
console.log(x == 10);
console.log(y == 10);        
console.log(x == y);

//checking with some special values
console.log(NaN == NaN);
console.log(0 == false);   
console.log(0 == null);
console.log(NaN == undefined);
console.log(1 == true);   
console.log(null == null);  
console.log(null == undefined);

console.log("**************Inequality operator(!=)****************");

//2.Inequality operator -to compare the inequality of two operands.

console.log(x != 8);
console.log(y != 10);        
console.log(x != y);

// Check against special values
console.log(0 != false);
console.log(0 != true);   
console.log(0 != null);
console.log(NaN != NaN);
console.log(0 != undefined);
console.log(0 != NaN);
console.log(null != undefined);
console.log(null != null);
console.log(NaN != undefined);

console.log("**************Strict equality Operator (===)****************");

//3.Strict equality Operator (===)-to compare the equality of two operands with type.

console.log(x === 8);
console.log(y === '10');        
console.log(x === y);

// Check against special values
console.log(NaN === NaN);   
console.log(0 === false);
console.log(1 === true);  
console.log(0 === null);
console.log(NaN === undefined);
console.log(null=== null);
console.log(null === undefined);

console.log("***************Strict inequality Operator (!==)***************");
//4.Strict inequality Operator (!==) -to compare the inequality of two operands with type.

console.log(x !== 8);
console.log(y !== 10);        
console.log(x !== y);

// Check against special values
console.log(0 !== false);
console.log(0 !== true);   
console.log(0 !== null);
console.log(NaN !== NaN);
console.log(0 !== undefined);
console.log(0 !== NaN);
console.log(null !== undefined);
console.log(null !== null);
console.log(NaN !== undefined);

console.log("**************Greater than Operator (>)****************");
//5. Greater than Operator (>) -to check whether the left-side value is greater than the right-side value.

let p=10;
let q=20;
console.log(p > 10);
console.log(q > 10);        
console.log(p > q);
console.log(p > 0);
console.log(p > -10);
console.log(p > "10");
console.log(p > 2.0);

console.log("**************Greater than or equal Operator (>=)****************");
//6.Greater than or equal Operator (>=) -to check whether the left side operand is greater than or equal to the right side operand.console.log(p > 10);
console.log(p >= 10);
console.log(q >= 10);        
console.log(p >= q);
console.log(p >= 0);
console.log(p >= -10);
console.log(p >= "10"); // It changes the string "10" into a normal number 10 true
console.log(p >= "15");
console.log(p >= 2.0);
console.log(p >= 10.1);

console.log("**************Less than Operator (<)****************");

//7.Less than Operator (<) -to check whether the left-side value is less than the right-side value.
console.log(p < 10);
console.log(q < 30);        
console.log(p < q);
console.log(p < 0);
console.log(p < -10);
console.log(p < "10");
console.log(p < 2.0);

console.log("**************Less than or equal Operator (<=)****************");
//8.Less than or equal Operator (<=) -to check whether the left-side value is less than or equal to the right-side value.

console.log(p <= 10);
console.log(q <= 30);        
console.log(p <= q);
console.log(p <= 0);
console.log(p <= -10);
console.log(p <= "10");
console.log(p <= 2.0);