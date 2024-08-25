"use strict";
// ### Question 1: Armstrong Number Checker (Without Using split)
// Problem: Check if a given number is an Armstrong number. An Armstrong number is a number
//that is equal to the sum of its own digits each raised to the power of the number of digits.
Object.defineProperty(exports, "__esModule", { value: true });
function isArmstrongNumber(number) {
    const numberAsString = String(number);
    const digitCount = numberAsString.length;
    const poweredDigits = [];
    for (let i = 0; i < digitCount; i++) {
        const digit = Number(numberAsString[i]);
        poweredDigits.push(digit ** digitCount);
    }
    const sumOfPoweredDigits = poweredDigits.reduce((accumulator, current) => accumulator + current, 0);
    return number === sumOfPoweredDigits;
}
console.log(isArmstrongNumber(153)); //output: true
console.log(isArmstrongNumber(200)); // output : false
