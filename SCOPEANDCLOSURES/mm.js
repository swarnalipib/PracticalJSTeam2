try {
  // This function does not exist, so it throws an error
  nonExistentFunction(); 
  console.log("This line will never run.");
} catch (error) {
  console.log("An error occurred!");
  console.error("Error message:", error.message); 
}

console.log("The script keeps running perfectly!");