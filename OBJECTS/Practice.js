// //console.log(name);//name is not defined,: Throws a ReferenceError because name is not declared in the global scope yet.
// function user()
// {
//     var a=10;
//     let b=20;
//     const c=30;

//     //var is hoisted to the top of the function scope, but it is not initialized until the code execution reaches that line.
//     //console.log(name); //gives output as swarna
   
// }
//  //console.log(a);//name is not defined ,Throws a ReferenceError because variables declared with var inside a function are local to that function and cannot be accessed outside it.
// user();
// console.log(a);
// console.log(b);
// console.log(c);


var a=100;
let b =200;
const c =300;
function user()
{
    var a=10;
    let b=20;
    const c=30;
    //return a,b,c;
    console.log(a);
    console.log(b);
    console.log(c);
}
user();
// console.log(a);
// console.log(b);
// console.log(c);