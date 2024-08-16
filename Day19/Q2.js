"use strict";
// ### Question 2: String Character Frequency
Object.defineProperty(exports, "__esModule", { value: true });
function charFrequency(str) {
    const frequency = {};
    for (const char of str) {
        if (frequency[char]) {
            frequency[char]++;
        }
        else {
            frequency[char] = 1;
        }
    }
    return frequency;
}
// Example usage:
const inputString = "hello";
console.log(charFrequency(inputString)); // Output: { h: 1, e: 1, l: 2, o: 1 }
