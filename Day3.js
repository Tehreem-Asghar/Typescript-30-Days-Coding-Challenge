"use strict";
//Question 5:
// Remove Duplicates from Array
// Write a TypeScript function named removeDuplicates that takes an array of numbers and returns a new array with all duplicate elements removed.
// *Do not use built-in methods* like Set.
// Requirements:
// - The function should iterate through the array and check for duplicates manually.
// - You can use additional arrays or variables to keep track of seen elements.
// - Do not use any built-in methods like filter, reduce, or Set.
// This function removes all duplicate elements
function removeDuplicates(arr) {
    let withoutDup = [];
    // Iterate through all array elements
    for (let i = 0; i < arr.length; i++) {
        let isDublicat = false;
        // Another loop to check if the element is a duplicate
        for (let j = 0; j < withoutDup.length; j++) {
            if (arr[i] === withoutDup[j]) {
                isDublicat = true;
            }
        }
        // If the element is not a duplicate, add it to the new array
        if (!isDublicat) {
            withoutDup.push(arr[i]);
        }
    }
    return withoutDup;
}
// Example usage
// const numbers = [1, 2, 2, 3, 4, 4, 5];
// console.log(removeDuplicates(numbers)); // Output: [1, 2, 3, 4, 5]
// console.log(removeDuplicates([10, 10, 20, 30, 30])); // output : [10,20,30]
// console.log(removeDuplicates([1, 1, 1, 1, 1, 2, 2, 2, 2, 6, 6, 7, 4, 3, 2])); // output : [1,2,6,7,4,3,2]
// Question 6:
//  Find the Second Largest Number in an Array
// Write a TypeScript function named findSecondLargest that takes an array of numbers and returns the second largest number in the array. *Do not use built-in methods* like sort.
// Requirements:
// - The function should manually find the largest and second largest numbers by iterating through the array.
// - You can use additional variables to keep track of the largest and second largest numbers.
// - Do not use any built-in methods like sort.
function findSecondLargest(arr) {
    // If array length is less than 2, return undefined
    if (arr.length < 2) {
        return undefined;
    }
    // Track variables for the largest and second largest numbers
    let largest = -Infinity;
    let secondLargest = -Infinity;
    // Iterate through the array elements
    for (let num of arr) {
        // If the current element is greater than the largest, update variables
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        }
        else if (num > secondLargest && num < largest) {
            secondLargest = num;
        }
    }
    // Return undefined if there is no second largest number
    return secondLargest === -Infinity ? undefined : secondLargest;
}
// Example usage:
console.log(findSecondLargest([1, 2, 3, 4, 5])); // Output: 4
console.log(findSecondLargest([10, 20, 30, 15, 25])); // Output: 25
console.log(findSecondLargest([5])); // Output: undefined
console.log(findSecondLargest([])); // Output: undefined
