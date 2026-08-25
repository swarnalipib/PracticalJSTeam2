function collectItems() {
            let itemsArray = []; 
            
            for (let i = 0; i < 3; i++) {    //  Loop 3 times to get 3 items
                let item = prompt(`Enter item ${i + 1} of 3:`);
                itemsArray.push(item); // Add the input to the array 
            }
            
            document.getElementById("output").innerText = "Your Array: " + itemsArray; //Display the array on the HTML page
           console.log(itemsArray);
        }