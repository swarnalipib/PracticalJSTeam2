function findNLargest(arr, n) {
    let limit = n > arr.length ? arr.length : n;  // if n is greater than array length, adjust n
    
    // Bubble sort only for the last 'limit' elements
    for (let i = 0; i < limit; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            // Swap if the current element is greater than the next element
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    
    // Manually extract the last 'limit' elements into a new array
    let result = [];
    let index = 0;
    for (let i = arr.length - limit; i < arr.length; i++) {
        result[index] = arr[i];
        index++;
    }
    
    return result;
}

// Example usage:
const numbers = [3, 10, 4, 1, 8, 9, 2];
const N = 3;
console.log(findNLargest(numbers, N)); // Output: [8, 9, 10]