//var-variable- functional/globalscope,redeclared,reassigned,ifhositedthenundefined error
//if declared inside a scope always leaks out os not preferrable to use much.

//redeclared and reassignment possible
// var x =10; //redeclared possible
// var x=20; //reassigned possible
// x=30;
// console.log(x); //no error 
//*************************************************************** 
//let variable block scope,reassigned,ifhpistedrefreneceerror
//it is accessible only inside a scope /not outside

//let x =10;
//let x=20; //not possible to redeclared error : x already defined
//x=30; //reassigned possible
//console.log(x);

//*************************************************************** 

//const variable - blocked scope,notpossible to redeclared and reassigned , ifhoistedthengivesrefresnceerror
const x =10;
//const x=20; //not possible to redeclared error : x already defined
x=30; //reassigned not possible : type error assignment to constant variable
console.log(x);
/*
if (true) {
  var x = 10;
  let y = 20;
  const z = 30;
}
console.log(x); //no error shows the o/p
console.log(y); //Reference error as it cannot be accessed out of the block scope
console.log(z); //Reference error as it cannot be accessed out of the block scope */
