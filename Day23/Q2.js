"use strict";
// ### Question 2: Convert a Number to Binary (Without Using Built-in Functions)
// Task: Write a function convertToBinary that takes a number as input and converts it into its binary form.
Object.defineProperty(exports, "__esModule", { value: true });
// Hint: Repeatedly divide the number by 2 and note down the remainder. Join 
//the remainders in reverse order to get the binary representation.
function convertToBinary(num) {
    if (num === 0) {
        return "0";
    }
    let binary = "";
    while (num > 0) {
        let remainder = num % 2;
        binary = remainder + binary;
        num = Math.floor(num / 2);
    }
    return binary;
}
console.log(convertToBinary(10)); // Output: "1010"
