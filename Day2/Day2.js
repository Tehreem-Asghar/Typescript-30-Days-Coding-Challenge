"use strict";
// Question 3:
//  First and Last Element
// Objective: Write a TypeScript function that takes an array of numbers and returns a new array containing only the first and last elements of the input array.
// Requirements:
// If the array has only one element, the function should return an array with that element duplicated.
// Ensure the function handles arrays with a single element correctly.
function number(arr) {
    let FirstAndLastElement = [];
    if (arr.length === 0) {
        FirstAndLastElement = [arr[0], arr[0]];
    }
    else {
        FirstAndLastElement = [arr[0], arr[arr.length - 1]];
    }
    return FirstAndLastElement;
}
console.log(number([1])); // outPut  [1,1]
console.log(number([1, 3])); // OutPut [1,3]
console.log(number([1, 2, 3, 4, 5, 9])); // OutPut [1,9]
// Question: 4
// Find the Largest Number
// Objective: Write a TypeScript function that takes an array of numbers and returns the largest number in the array.
// Requirements:
// The function should handle arrays with positive and negative numbers.
// If the array contains only one number, return that number.
// Ensure the function handles an empty array gracefully (you might decide to return undefined or throw an error based on your needs).
function findLargestNumber(numbers) {
    if (numbers.length === 0) {
        return undefined; // Handle empty array gracefully
    }
    let largestNumber = numbers[0]; // Initialize with the first element
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largestNumber) {
            largestNumber = numbers[i];
        }
    }
    return largestNumber;
}
console.log(findLargestNumber([3, 5, 7, 2, 8])); // Output: 8
console.log(findLargestNumber([-10, -3, -25, -8])); // Output: -3
console.log(findLargestNumber([5])); // Output: 5
console.log(findLargestNumber([])); // Output: undefined
