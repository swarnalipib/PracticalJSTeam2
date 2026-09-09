//generators are special functions used to pause and resume execution.
//They are useful when you want to produce values one at a time instead of returning everything at once .
//use function* to create generators and yield to pause it.
//Each time .next() is called, the function executes until it hits the next yield statement. It returns an object with value (the yielded data) and done (a boolean showing if the function finished)

//Example1
function* numbers()
{
    yield 1;
    yield 2;
    yield 3;

}

const g = numbers();
console.log(g.next());//{ value: 1, done: false }
console.log(g.next());//{ value: 2, done: false }
console.log(g.next());//{ value: 3, done: false }
console.log(g.next());//{ value: undefined, done: true }

//Example2 generator returning a value

function* numbers()
{
    yield 1;
    yield 2;
    yield 3;

}

const g1 = numbers();
console.log(g1.next().value); //1
console.log(g1.next().value);//2
console.log(g1.next().value);//3
console.log(g1.next().value);//undefined

//Example 3 generator with a loop

function* numbers()
{
    yield 10;
    yield 20;
    yield 30;

}

for (const x of numbers())
{
    console.log(x);
}

//Example 4 with while loop

function* count()
{
    let i =1;
    while(i<=4)
    {
        yield i++;
    }
}

const gen =count();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

//Example 5 passing a value in next()

function* demo()
{
    const name = yield "what is your name?";
    yield `hello, ${name}!`;
}

const gene =demo();
console.log(gene.next().value);
console.log(gene.next("swarna").value);

//Example 6 generator returning a value

function* numbers()
{
    yield 1;
    yield 2;
    return 3;
    yield 4;

}

const g2 = numbers();
console.log(g2.next().value);// 1
console.log(g2.next().value);// 2
console.log(g2.next().value);// 3
console.log(g2.next().value);//undefined because of return statement as loops stops there.

//Example 7 generator in nested function 

function* generator1(i) {
  yield i + 1;
  yield* generator2(i); //yield* is used to delegate execution to another generator or iterable.
  yield i + 3;


function* generator2(i) {
  yield i;
  yield i+1;
  yield i + 10;
}
generator2();
}

const g3 = generator1(10);

console.log(g3.next().value); // 11
console.log(g3.next().value); // 10
console.log(g3.next().value); // 11
console.log(g3.next().value); // 20
console.log(g3.next().value); // 13
console.log(g3.next().value); // undefined

//Example 8 Generator as an object property

const ob = {
    *generator() { //generator function 
        yield  20;
        yield  40;
    }
}

const g4 = ob.generator();
console.log(g4.next().value);
console.log(g4.next().value);

//Example 9 Generator as an object method in a class

class test {
  *generator() {
    yield 1;
    yield 2;
    yield 3;
  }
}

const ob1 = new test();
const g5 = ob1.generator();

console.log(g5.next().value);
console.log(g5.next().value);
console.log(g5.next().value);
console.log(g5.next().value);

//Example10 Generator with Array 

function* generator()
{
   for (let x of fruits)
    {
          yield x;
   }

}

const fruits = ["apple","grapes","banana"];
const g6 = generator();
console.log(g6.next().value);
console.log(g6.next().value);
console.log(g6.next().value);

// Example 11 Generate even numbers

function* evenNum(n)
{
    for (let i=2; i <= n; i+=2)
    {
        yield i;
    }
}
const g7 = evenNum(10);
console.log(g7.next().value);//2
console.log(g7.next().value);//4
console.log(g7.next().value);//6
console.log(g7.next().value);//8
console.log(g7.next().value);//10
console.log(g7.next().value);//undefined

//Example 12 Count vowels using generator 

function* vowels(str)
{
  for(let x of str)
  {
   if ("aeiouAEIOU".includes(x))
   {
    yield x;
   }
  }
}
 let str1 ="jAVascript PrOgramming";
 let count=0;
for (let y of vowels(str1))
{
  console.log(y);
  count++;
}

console.log("Total vowels:",count);

//Example 12 Converting uppercase to lowercase using generator 

function* convertupper(str)
{
  for(let i=0;i<str.length;i++)
  {
    yield str[i].toUpperCase();
   
  }
}
let str ="jAVascript PrOgramming";

for (let y of convertupper(str))
{
  console.log(y);
}
