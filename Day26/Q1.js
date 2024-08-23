"use strict";
// Question 1: Reverse a Number
Object.defineProperty(exports, "__esModule", { value: true });
// Write a function reverseNumber(n: number): number that takes a positive
// integer n and returns the number with its digits reversed.
function reverseNumber(n) {
    let reverse = String(n).split("").reverse().join("");
    let reverseNumber = Number(reverse);
    return reverseNumber;
}
console.log(reverseNumber(1234)); // Output: 4321
console.log(reverseNumber(567)); // Output: 765
