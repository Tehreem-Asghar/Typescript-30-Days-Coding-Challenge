"use strict";
// ***Question 2:*** Find the First Non-Repeated Character
// Write a function firstNonRepeatedCharacter that takes a string and returns the first character
// that does not repeat. If all characters repeat, return an empty string.
Object.defineProperty(exports, "__esModule", { value: true });
function firstNonRepeatedCharacter(s) {
    const count = {};
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (count[char]) {
            count[char]++;
        }
        else {
            count[char] = 1;
        }
    }
    for (let j = 0; j < s.length; j++) {
        if (count[s[j]] === 1) {
            return s[j];
        }
    }
    return "";
}
// // Example Usage:
const s = "swiss";
console.log(firstNonRepeatedCharacter(s));
// Expected output: "w"
// Hint:
// - *Hint 1*: Create an object to count the frequency of each character in the string.
// - *Hint 2*: Iterate through the string and update the count for each character.
// - *Hint 3*: Iterate through the string again and find the first character with a count of 1 in the object.
// - *Hint 4*: If no character with a count of 1 is found, return an empty string.
