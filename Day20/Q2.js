"use strict";
// Question 2: Reverse a Number
Object.defineProperty(exports, "__esModule", { value: true });
function reverseNumber(num) {
    const reversedString = num.toString().split('').reverse().join('');
    return parseInt(reversedString, 10);
}
console.log(reverseNumber(1234)); // output : 4321
console.log(reverseNumber(56789)); //output: 98765
console.log(reverseNumber(1000)); //output: 1 (leading zeros are dropped)
console.log(reverseNumber(-1234)); //output: -4321 (if negative numbers are considered)
