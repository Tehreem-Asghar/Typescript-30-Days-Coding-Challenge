"use strict";
// ### Question 1: Remove Duplicates from Sorted Array
Object.defineProperty(exports, "__esModule", { value: true });
function removeDub(arr) {
    if (arr.length === 0)
        return 0;
    // Position of the last unique element
    let uniqueInd = 0;
    for (let i = 1; i < arr.length; i++) {
        // Check if the current element is different from the last unique element
        if (arr[i] !== arr[uniqueInd]) {
            uniqueInd++;
            // Move the current unique element to the next position in the array
            arr[uniqueInd] = arr[i];
        }
    }
    // Return the number of unique elements in the array
    return uniqueInd + 1;
}
let mixDuplicates = [1, 1, 2, 2, 3, 4, 4, 5];
let Length = removeDub(mixDuplicates);
console.log(Length); // Output: 5
console.log(mixDuplicates.slice(0, Length)); // Output: [1, 2, 3, 4, 5]
