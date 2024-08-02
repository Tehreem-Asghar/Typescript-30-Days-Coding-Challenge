"use strict";
// //Day 5 Tasks
// *Question 1: Array Comparison and Manipulation*
// Create a function in TypeScript that takes two arrays of numbers as input. The function should
// perform the following operations based on the conditions given:
// 1. *If the lengths of both arrays are the same and all elements are the same:*
//    - Merge both arrays into one array.
//    - Multiply corresponding elements of both arrays to create a new array.
// 2. *If the lengths of both arrays are different:*
//    - Merge both arrays into one array.
//    - Return the middle element of the merged array.
// 3. *If the lengths of both arrays are the same but elements are different:*
//    - Make the elements of both arrays the same by adding corresponding elements.
//    - Merge the arrays and add corresponding elements of the resulting array.
function manipulateArrays(arr1, arr2) {
    let result = [];
    // Check if both arrays have the same length
    if (arr1.length === arr2.length) {
        let sameElements = true;
        // Iterate through the arrays and check if all elements are the same
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                sameElements = false;
                break;
            }
        }
        if (sameElements) {
            // If all elements are the same, multiply corresponding elements and store in result
            for (let i = 0; i < arr1.length; i++) {
                result[i] = arr1[i] * arr2[i];
            }
        }
        else {
            // If elements are different, add corresponding elements and store in result
            for (let i = 0; i < arr1.length; i++) {
                result[i] = arr1[i] + arr2[i];
            }
        }
        return result;
    }
    else {
        // If arrays have different lengths, merge them into one array
        let mergedArray = [];
        // Copy elements of arr1 to mergedArray
        for (let i = 0; i < arr1.length; i++) {
            mergedArray[i] = arr1[i];
        }
        // Copy elements of arr2 to mergedArray starting from the end of arr1
        for (let i = 0; i < arr2.length; i++) {
            mergedArray[arr1.length + i] = arr2[i];
        }
        // Find the middle index and return the middle element
        let middleIndex = Math.floor(mergedArray.length / 2);
        return mergedArray[middleIndex];
    }
}
+console.log(manipulateArrays([1, 2, 3], [1, 2, 3])); // should output [1, 4, 9]
console.log(manipulateArrays([1, 2], [3, 4, 5])); // should output 4
console.log(manipulateArrays([1, 2, 3], [4, 5, 6])); // should output [5, 7, 9]
