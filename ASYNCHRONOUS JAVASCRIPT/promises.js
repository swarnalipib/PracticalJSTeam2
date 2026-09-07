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

  //Example 12- using promise.All

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
test();

 
