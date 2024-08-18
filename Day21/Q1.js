"use strict";
// Question 1: Sum of Digits
Object.defineProperty(exports, "__esModule", { value: true });
function sumOfDigits(num) {
    let convertString = String(num);
    let convertArray = convertString.split("");
    let convertStrToNum = convertArray.map(Number);
    let addNum = convertStrToNum.reduce((acu, cur) => acu + cur, 0);
    console.log(addNum);
}
sumOfDigits(123); // Output: 6
sumOfDigits(4567); // Output: 22
