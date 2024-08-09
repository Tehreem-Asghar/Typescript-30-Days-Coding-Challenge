"use strict";
// ***Question 2:*** Find the First Non-Repeated Character
Object.defineProperty(exports, "__esModule", { value: true });
function firstNonRepeatedCharacter(s) {
    //Create an object to store the count of each character in the string
    const count = {};
    // Loop through the string and count each character
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (count[char]) {
            count[char]++; // If the character already exists in the count object, increment its count
        }
        else {
            count[char] = 1; // If the character doesn't exist, add it with a count of 1
        }
    }
    //Loop through the string again to find the first character with a count of 1
    for (let j = 0; j < s.length; j++) {
        if (count[s[j]] === 1) {
            return s[j]; // Return the first non-repeated character
        }
    }
    // If no non-repeated character is found, return an empty string
    return "";
}
const s = "swiss";
console.log(firstNonRepeatedCharacter(s)); // Output: "w"
