"use strict";
// ### Question: 1 *Sum of Odd Numbers and Multiplication Table*
Object.defineProperty(exports, "__esModule", { value: true });
function oddSumMultiplicationTable(numbers) {
    let oddNumbers = numbers.filter((num) => num % 2 !== 0);
    let oddSum = oddNumbers.reduce((accu, cur) => accu + cur, 0);
    let multiplication = [];
    for (let i = 1; i <= 10; i++) {
        multiplication.push(oddSum * i);
    }
    return multiplication;
}
console.log(oddSumMultiplicationTable([2, 3, 5, 8, 11]));
//  Output: [19, 38, 57, 76, 95, 114, 133, 152, 171, 190]
console.log(oddSumMultiplicationTable([11, 22, 33, 44, 55, 66, 77, 88, 99]));
//  Output: [  275,  550,  825,1100, 1375, 1650, 1925, 2200, 2475, 2750 ]
