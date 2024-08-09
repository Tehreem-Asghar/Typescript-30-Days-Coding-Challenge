"use strict";
// ### Question 2: Move Zeroes
Object.defineProperty(exports, "__esModule", { value: true });
function moveZero(arr) {
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        // If the current element is not zero
        if (arr[i] !== 0) {
            // Move the non-zero element to the current `index` position
            arr[index] = arr[i];
            index++;
        }
    }
    // Fill the remaining positions in the array with zeroes
    for (let j = index; j < arr.length; j++) {
        arr[j] = 0;
    }
}
let zeroMoveEnd = [0, 1, 0, 3, 12];
moveZero(zeroMoveEnd);
console.log(zeroMoveEnd); // output : [ 1, 3, 12, 0, 0 ]
