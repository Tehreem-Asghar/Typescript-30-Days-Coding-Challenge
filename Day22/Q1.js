"use strict";
// ### Question 1: Count Digits in a Number
// Given a number, your task is to count and return the number of digits in that number.
Object.defineProperty(exports, "__esModule", { value: true });
function countDigits(num) {
    let DigitNum = String(num).length;
    return DigitNum;
}
// Example usage
console.log(countDigits(12345)); // Output: 5
console.log(countDigits(987)); // Output: 3
