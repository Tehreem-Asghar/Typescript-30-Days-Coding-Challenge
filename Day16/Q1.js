"use strict";
// ### Question:1 *Sum of Even Numbers from Multiple Arrays*
Object.defineProperty(exports, "__esModule", { value: true });
function sumEvenNumbers(arr1, arr2, arr3) {
    const sumOfEvens = (arr) => {
        return arr
            .filter((num) => num % 2 === 0)
            .reduce((sum, num) => sum + num, 0);
    };
    return [sumOfEvens(arr1), sumOfEvens(arr2), sumOfEvens(arr3)];
}
// *Example:*
// typescript
console.log(sumEvenNumbers([1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12])); // output: [6, 14, 22]
console.log(sumEvenNumbers([2, 4, 6], [1, 3, 5], [10, 20, 30])); // output :[12, 0, 60]
console.log(sumEvenNumbers([11, 13, 15], [2, 4], [8, 10, 12])); // output : [0, 6, 30]
