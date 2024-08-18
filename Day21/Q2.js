"use strict";
// ### Question 2: Count Consonants in a String
// *Problem:*  
// Write a function countConsonants that takes a string as input and returns the number of
// consonants in the string. Consonants are all alphabetical characters 
//except a, e, i, o, u (both lowercase and uppercase).
Object.defineProperty(exports, "__esModule", { value: true });
function countConsonants(str) {
    let alpha = 'aeiouAEIOU';
    let num = 0;
    for (let i = 0; i < str.length; i++) {
        let lowerCase = str[i].toLowerCase();
        if (!alpha.includes(lowerCase)) {
            num++;
        }
    }
    console.log(num);
}
// *Example:*  
// typescript
countConsonants("hello"); // Output: 3
countConsonants("TypeScript"); // Output: 7
// *Hint:*  
// Loop through the string and check each character to see if it is a consonant by excluding vowels.
