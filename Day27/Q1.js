"use strict";
// ### Question 1: Count the Number of Divisors
Object.defineProperty(exports, "__esModule", { value: true });
function Divisors(num) {
    let trackCount = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            trackCount++;
        }
    }
    console.log(trackCount);
}
Divisors(12); // output : 6
Divisors(7); // output : 2
