"use strict";
// ***Question 1:*** Merge Two Sorted Arrays
Object.defineProperty(exports, "__esModule", { value: true });
function mergeSortedArrays(arr1, arr2) {
    let A = 0;
    let B = 0;
    let mergedArray = [];
    // Iterate over both arrays and add the smaller value to mergedArray
    while (A < arr1.length && B < arr2.length) {
        if (arr1[A] < arr2[B]) {
            mergedArray.push(arr1[A]);
            A++;
        }
        else {
            mergedArray.push(arr2[B]);
            B++;
        }
    }
    // Add any remaining elements from arr1 to mergedArray
    while (A < arr1.length) {
        mergedArray.push(arr1[A]);
        A++;
    }
    // Add any remaining elements from arr2 to mergedArray
    while (B < arr2.length) {
        mergedArray.push(arr2[B]);
        B++;
    }
    return mergedArray;
}
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
console.log(mergeSortedArrays(arr1, arr2)); // output: [1, 2, 3, 4, 5, 6, 7, 8]
