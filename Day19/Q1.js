"use strict";
// ### Question 1: Find the Maximum Difference
Object.defineProperty(exports, "__esModule", { value: true });
function findMaxDifference(arr) {
    let value = arr[0];
    let maximumDifference = 0;
    for (let i = 1; i < arr.length; i++) {
        let curDiff = arr[i] - value;
        if (curDiff > maximumDifference) {
            maximumDifference = curDiff;
        }
        if (arr[i] < value) {
            value = arr[i];
        }
    }
    return maximumDifference;
}
console.log(findMaxDifference([2, 7, 9, 5, 1, 3, 5])); // output : 7
console.log(findMaxDifference([2, 3, 5, 6, 2, 8, 1])); // output : 6
