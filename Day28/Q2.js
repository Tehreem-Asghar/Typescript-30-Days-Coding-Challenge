"use strict";
// ### Question 2: Find the LCM (Least Common Multiple)
// Problem: Find the Least Common Multiple (LCM) of two numbers. LCM is the smallest number 
//that is a multiple of both given numbers.
Object.defineProperty(exports, "__esModule", { value: true });
function gcd(a, b) {
    // Euclidean algorithm to find GCD
    while (b !== 0) {
        const remainder = a % b;
        a = b;
        b = remainder;
    }
    return a;
}
function lcm(a, b) {
    // LCM calculation using GCD
    return (a * b) / gcd(a, b);
}
console.log(lcm(12, 18)); // output: 36
console.log(lcm(10, 20)); // output : 20
