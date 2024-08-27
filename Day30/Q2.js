"use strict";
// **Question 2: Calculate the Sum of the First n Natural Numbers**
Object.defineProperty(exports, "__esModule", { value: true });
function sumOfNaturalNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumOfNaturalNumbers(5)); //output : 15
console.log(sumOfNaturalNumbers(2)); //output : 3
