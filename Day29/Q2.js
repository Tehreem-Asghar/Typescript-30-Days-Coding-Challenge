"use strict";
// *Question 2: Find the Difference Between the Largest and Smallest Digit*
Object.defineProperty(exports, "__esModule", { value: true });
function Difference(num) {
    let conStr = String(num);
    let largest = 0;
    let smallest = 9;
    for (let digit of conStr) {
        const digitNum = parseInt(digit);
        largest = Math.max(largest, digitNum);
        smallest = Math.min(smallest, digitNum);
    }
    return largest - smallest;
}
console.log(Difference(7593)); // output 6
console.log(Difference(12345)); // output 4
