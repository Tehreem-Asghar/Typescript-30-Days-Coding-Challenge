"use strict";
// *Find the Maximum Sum from Two Arrays*
Object.defineProperty(exports, "__esModule", { value: true });
function findMax(array) {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}
function findMaxSum(arr1, arr2) {
    let first = findMax(arr1);
    let second = findMax(arr2);
    return first + second;
}
console.log(findMaxSum([3, 5, 7, 2, 8], [10, 20, 30, 5])); // Output: 38 (8 from the first array + 30 from the second array)
console.log(findMaxSum([1, 2, 3], [4, 5, 6])); // Output: 9 (3 from the first array + 6 from the second array)
