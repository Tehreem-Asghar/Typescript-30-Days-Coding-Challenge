"use strict";
// Question 7: Find Duplicate Numbers in an Array
// *Description:*
// Write a TypeScript function that takes an array of numbers as input and returns a new array
// containing only the duplicate numbers from the original array. If there are no duplicates,
//return an empty array.
Object.defineProperty(exports, "__esModule", { value: true });
function findDuplicates(numbers) {
    let duplicateElements = [];
    let withoutDuplicate = [];
    for (let i = 0; i < numbers.length; i++) {
        let isDuplicate = false;
        let notDuplicate = false;
        // Check if the number is in the withoutDuplicate array
        for (let j = 0; j < withoutDuplicate.length; j++) {
            if (numbers[i] === withoutDuplicate[j]) {
                notDuplicate = true;
                break;
            }
        } // Check if the number is already in duplicateElements array
        for (let k = 0; k < duplicateElements.length; k++) {
            if (numbers[i] === duplicateElements[k]) {
                isDuplicate = true;
                break; // Added break to stop further checks
            }
        }
        // Add to duplicateElements if it is in withoutDuplicate but not in duplicateElements
        if (notDuplicate && !isDuplicate) {
            duplicateElements.push(numbers[i]);
        }
        // Add to withoutDuplicate if it is not there already
        if (!notDuplicate) {
            withoutDuplicate.push(numbers[i]);
        }
    }
    return duplicateElements;
}
const num = [1, 2, 3, 2, 4, 5, 5, 6];
const duplicates = findDuplicates(num);
console.log(duplicates); // Output:  [2, 5]
console.log(findDuplicates([1, 2, 3, 4])); // output : [] empty array bcz here is not duplicat elements
