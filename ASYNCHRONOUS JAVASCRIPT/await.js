//Await -await is a keyword used to pause the execution of an async function until a Promise settles (either resolves or rejects)

//Once the Promise finishes, await extracts and returns its fulfillment value so you can assign it directly to a variable
//async functions always return a Promise ...... —if it returns a non-promise value, JavaScript automatically wraps it in a resolved Promise.
//async function- Does not block the main execution thread
//await pauses execution until the Promise is resolved or rejected.
//improves readability compared to .then() and .catch() chaining.
//async and await make Promise-based code easier to read.

//Example1 -

function cookFood(){
    return new Promise((resolve) => {

        setTimeout(() =>{
        resolve("Food is ready");
    },2000);
});
}

async function eat() //return a promise
{
    console.log("cooking...........");

    const result = await cookFood(); //it pause until promise is settled (either resolves or rejects)

    console.log(result);
    console.log("Now we can eat");
}

eat();

//Or using then in above program

function cookFood(){
    return new Promise((resolve) => {

        setTimeout(() =>{
        resolve("Food is ready");
    },2000);
});
}

cookFood().then((message) => {
    console.log(message)
    console.log("Now we can eat");
});

//Example2 - using two awaits

function makeTea()
{
    return new Promise((resolve) => {

setTimeout(() =>{
    resolve("Tea ready");
},2000);

});

}

function makeToast()
{
    return new Promise((resolve) => {

setTimeout(() =>{
    resolve("Toast ready");
},1000);

});

}

async function breakfast() {

    console.log("Lets make the tea");//It prints 1st

    const tea = await makeTea(); //then It prints Tea ready
    console.log(tea);

    const toast = await makeToast(); //then it prints toast ready
    console.log(toast);
    console.log("Breakfast ready"); //then lastly it prints Breakfast ready
}

breakfast();

//Example 3

function wait()
{

    return new Promise((resolve) => {
        setTimeout(() => {
         resolve("Wait for few mintues");
        },2000);
    });
}

async function test()
{
    console.log("1");
    let s = await wait();//3rd it prints "wait for few minutes" and then 4th as 2
    console.log(s);
    console.log("2");
}

test();//it 1st print 1
console.log("3");//2nd it print it 3

//Example 4
function first()
{
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("First");
    },2000);
});
}

function second()
{
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("second");
    },1000);
});
}

async function test()
{
    console.log(await first());
    console.log(await second());
}
test();
console.log("I am first");

//Example 5 - promise not returned

async function test()
{
 
    console.log("A");
    await Promise.resolve("B");
    console.log("c");
}
test();
console.log("D"); //A D C (B not having return statment  or printed with console)

//Example 6 promise returned

function getName()
{
    return Promise.resolve("Swarna");
}

async function test()
{
 
   const name = await getName();
    console.log("Hello " + name);
}
test();

//Example 7 with reject 

function getData()
{
    return Promise.reject("Something went wrong");
}

async function test()
{
    try{
 
   const result = await getData();
    console.log(result);

     } catch (error){ //if you dont add catch it throw error
    console.log(error);
}
}
test();

//Example 8 function with parameters

function  task(name,time){
    return new Promise(resolve => {
        setTimeout(() => {
     console.log(name);
     resolve();
        },time)
    });
}

async function test()
{
    await task("A",2000);
    await task("B",1000);
    await task("C",500);
}
test();

//Example 9  with promise.all


function  task(name,time){
    return new Promise(resolve => {
        setTimeout(() => {
     console.log(name);
     resolve();
        },time)
    });
}

async function test()
{
    await Promise.all([
    task("A",2000),
    task("B",1000),
    task("C",500)
]);
}
test();//it prints 1st which has less time set one after the other as they all together executed