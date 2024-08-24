"use strict";
// ### Question 2: Check if a Number is a Perfect Square
Object.defineProperty(exports, "__esModule", { value: true });
function isSquart(num) {
    const sqrt = Math.sqrt(num);
    return sqrt % 1 === 0;
}
console.log(isSquart(16)); //output : true
console.log(isSquart(20)); // output : false
