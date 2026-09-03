//finally -This block executes no matter what. It runs whether an error occurred or not, making it perfect for cleanup tasks.

//Example -
try{
  let result = 10/2
  console.log(result);
}
catch(error){
  console.log("An error occured");
}
finally{
  console.log("Done");
}

//example - finally runs even when you use return 

function test()
{
  try {
    return "Hello";
  }
  finally {
    console.log("it runs finally");
  }
}
console.log(test());

//Example Division

try{
  let a =10;
  let b =0;

  if(b===0){
    throw new Error("cannot divide by zero")
  }
  console.log(a/b);
}
catch(error)
{
console.log(error.message);
}
finally{
  console.log("Calculation done")
}

//Example

try{
  let x=y;//y not defined
}
catch(error){
console.log("Error message:",error.message);
}
finally{
  console.log("Task completed")
}