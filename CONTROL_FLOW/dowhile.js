//dowhile-it executes the code block at least once before checking the condition.

//Example 1
//print 1 till 10 like 1 ,2,3..10
let i=1;

do {
    console.log(i);
    i++;
}
while(i<=10); 

//Example 2
//Print 10,9,8...1

let n=10;

do{
    console.log(n);
    n--;
}while (n>0);

//Example 3
//Print 5 skip counting  5,10,15,20,25

let j=0

do{
     j+=5;
    console.log("skip counting of 5:",j);
}while (j<25);

//Example 4
//Print "12345"

let output = "";
let s = 0;

do {
  s += 1;
 output += s;
} while (s < 5);

console.log(output);
