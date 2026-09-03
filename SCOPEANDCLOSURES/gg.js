function abc(){ 
    let x = 7; 
  return function () { 
    x++;

       return function  demo()
        {
            x--;
            return x;
        }
    } 
} 

let res=abc()()();
console.log(res);