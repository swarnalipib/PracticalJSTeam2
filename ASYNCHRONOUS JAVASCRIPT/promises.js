//promise - used when something takes time,like fetching data from server,reading a file or waiting for a time,Api calls
//It can be in one of three states

//Pending: The task is in the initial state.
//Fulfilled: The task was completed successfully, and the result is available.
//Rejected: The task failed, and an error is provided.


//Example 1-

const demo = new Promise((resolve,reject) => {
    let success = true;

    if(success)
    {
        resolve("Task completed and successful"); //resolve(value): Marks the promise as fulfilled and provides a result.
    }
 else 
 {
    reject("Task failed"); //Marks the promise as rejected with an error.
 }
});

demo.then((message) =>{    //it runs when successful or function that JavaScript will call after the Promise is fulfilled.
    console.log(message);  //If you dont pass parameter message , it won't print any message 
}).catch((error) =>{
    console.log(error); //it runs when failed
});

//Example 2 using finally

const demo1 = new Promise((resolve,reduce) =>{
let num =4;
  if(num%2 === 0)
  {
    resolve("It is a even number");
  }
else 
    {
        reject("It is an odd number");
    }  

});

demo1.then ((message) => {  
    {
        console.log(message);
    }

}).catch((error) =>{
    console.log(error);

}).finally(() => {
    console.log("task complete."); // Runs no matter what
  });

//Example 3 using with setTimeout

const demo3 = new Promise((resolve,reject) => {

    setTimeout(() => {
        resolve("message received");
    },2000)
});

demo3.then ((message) => {  
    {
        console.log(message);
    }

}); //o/p will show bit late after 2 sec

//Example 4-ordering food

const foodOrder = new Promise((resolve,reject) => {

    let foodReady = true;

    if (foodReady) 
    {
        resolve("pizza is ready");
    }
    else 
    {
        reject("Pizza not available");
    }

});

foodOrder.then ((message) => {  
    {
        console.log(message);
    }

}).catch((error) =>{
    console.log(error);

});

//Example 5 - promise with function

function getUser() {
    return new Promise((resolve,reject) => {
        resolve("user data");
    });
}

getUser().then((data) => {
    console.log(data);

});

//Example 6- Promise chaining with then()


const demo4 = new Promise((resolve,reject) => {

    resolve("Task 1 done");
});


demo4.then((result) =>{  //then() can return another promise
    console.log(result);
}).then(() =>{
    console.log("call me again");
});

//Example 7-realtime problem with login 

function login(username,password)
{
    return new Promise((resolve,reject) =>{

        setTimeout(() =>{

        if (username === "admin" && password === "1234")
        {
            resolve("Login successful");
        }
        else 
        {
            reject("Invalid username and password");
        }
    },2000);
});
}

    login("admin","1234").then((message) => {
        console.log(message);
    }).catch((error) => {
        console.log(error);
    });

//Example 8-realtime problem with shopping cart

function checkstock(product) {

    return new Promise((resolve,reject) => {

        if (product === "laptop")
        {
            resolve("Laptop is in stock");
            
        }
        else
        {
            reject("product is out of stock");
        }

    });
}

    checkstock("laptop").then((message) =>{
        console.log(message);
        console.log("Add to cart");
    }).catch((error) =>{
        console.log(error);
    });

//Example 9 - Real problem with payment system

function payment(amount) {

    return new Promise((resolve,reject) => {

        console.log("processing payment");

        if (amount>0)
        {
            resolve("payment successful");
            
        }
        else
        {
            reject("payment failed");
        }

    });
}

    payment(2000).then((message) =>{
        console.log(message);
        console.log("Create order");
    }).catch((error) =>{
        console.log(error);
    });

//Example 10- Real-World API Fetch

// const demo7 = fetch('https://swapi.dev/api/people'); //// returns a promise

// demo7
//   .then ((data) => data.json())
//   .then ((data) => 
//     {
//      console.log(data)
//   })
//   .catch((error) => {
//      console.error(error)
//   })


//Example 11-

function downloadFile(url) {
  return new Promise((resolve, reject) => {
    console.log(`Starting download from ${url}...`);

    setTimeout(() => {  
      const downloadSuccess = true; 

      if (downloadSuccess) {
        resolve("file_content.pdf");
      } else {
        reject("Network timeout error.");
      }
    }, 2000);
  });
}
downloadFile("https://example.com")
  .then((file) => console.log(`Downloaded: ${file}`))
  .catch((error) => console.error(`Failed: ${error}`));

  //to do promise.All,Promise.race

  //Example 12- using promise.All -Promise.all() takes an array of promises and returns a single promise that resolves into an array of results once all input promises successfully complete
// if even a single promise rejects (fails), the entire operation aborts immediately and throws an error


const promise1 = Promise.resolve(10);

const promise2 = new Promise((resolve) => {
  setTimeout(() => resolve(20), 1000);
});

const promise3 = Promise.resolve(30);

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.log(error);
  });

//Example 13
const p1 = Promise.resolve(50);
const p2 = 200
const p3 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 100, 'geek');
});

Promise.all([p1, p2, p3]).then(function (values) {
    console.log(values);
});

//Example 14 -Using Timers with Different Promises

let pro1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Resolved First after 1 second");
    }, 1000);
});

let pro2  = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Resolved First after 2 seconds");
    }, 2000);
});

let pro3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Resolved First after 3 seconds");
    }, 3000);
});

try {
    let result = Promise.all([pro1 , pro2 , pro3 ]);
    result.then((data) => {
         console.log(data);
    });
} catch (error) {
    console.log(error);
};

//Example 15

const c1 = Promise.resolve("Task 1 complete");
const c2 = Promise.reject("Task 2 failed drastically!");
const c3 = Promise.resolve("Task 3 complete");

Promise.all([c1, c2, c3])
  .then((results) => {

    console.log("Success:", results);   // This code will NOT run because p2 rejected
  })
  .catch((error) => {
     console.error("Failure:", error);
    
  });

  //promise.race()-returns a promise that settles (either fulfills or rejects) as soon as the very first promise in the iterable settles.
  // If the fastest promise happens to reject, the entire Promise.race() rejects immediately with that error reason

const pr1 = new Promise((resolve) => 
  setTimeout(() => resolve("Promise 1 resolved (1000ms)"), 1000)
);

const pr2 = new Promise((_, reject) => 
  setTimeout(() => reject(new Error("Promise 2 rejected (500ms)")), 500) //If it 2000 then output will Promise3 fulfilled
);

const pr3 = new Promise((resolve) => 
  setTimeout(() => resolve("Promise 3 resolved (800ms)"), 800)
);

// Racing them together
Promise.race([pr1, pr2, pr3])
  .then((value) => {
    console.log("Fulfilled with:", value);
  })
  .catch((error) => {
    console.error("Race rejected! Error:", error.message);
  }); //As promise2 is the fastest time so entire Promise.race() rejects immediately with that error reason

  //Example 16

const r1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 600, "one");
});

const r2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 200, "two");
});

Promise.race([r1, r2]).then((value) => {
    console.log(value);
});// r2 i.e two