"use strict";
function sumArray(numbers) {
    let total = 0; // Initialize the total sum to 0
    for (let num of numbers) {
        total += num; // Add each number to the total sum
    }
    return total; // Return the computed sum
}
// Test the function
const numbers = [5, 2, 9, 1, 5, 6];
console.log(`The array is: [${numbers}]`);
console.log(`The sum of the numbers is: ${sumArray(numbers)}`);
