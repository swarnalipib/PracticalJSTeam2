class Test
{
    static a =100;
    b=20;


static m1()
{
    console.log("This is static method");
}

m2()
{
    console.log("This is non static method");
}
}
//We access static variable directly using class name 
console.log(Test.a);
//console.log(Test.b); //output: undefined
Test.m1();
//Test.m2(); //output test.m2 not a function


//We access nonstatic variable  using object

let t = new Test();
 console.log(t.b);
 t.m2();
 console.log(t.a); // undefined
 t.m1(); //t.m1 not a function