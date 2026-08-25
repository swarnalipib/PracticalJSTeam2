  function collectList() {
            let userInput = prompt("Enter items separated by commas (e.g. Apple, Banana, Orange):"); // 1. Ask user for a comma-separated list
            
            if (userInput !== null) {
                let itemsArray = userInput.split(","); // 2. Convert the text into an array using split()
                
                document.getElementById("output").innerText = "Your Array: " + JSON.stringify(itemsArray);  // 3. Display the array on the HTML page
                console.log(itemsArray);
            }
        }

        