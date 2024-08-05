"use strict";
// *Question 2: Extract First Letters from String Array*
// Create a function in TypeScript that takes an array of strings (names) as input. The function
//should return a new array containing the first letter of each name.
// *Hints:*
// - Iterate through each name in the array.
// - Extract the first letter of each name without using built-in methods.
Object.defineProperty(exports, "__esModule", { value: true });
function extractFirstLetters(names) {
    let FirstLettle = [];
    for (let i = 0; i < names.length; i++) {
        let word = names[i];
        for (let j = 0; j < word.length; j++) {
            FirstLettle[i] = word[0];
        }
    }
    return FirstLettle;
}
console.log(extractFirstLetters(["Tehreem", "Shaheen", "Namal", "Hajra"])); // output ['T','S','N','H']
console.log(extractFirstLetters(["Alice", "Bob", "Charlie", "David", "Eve"])); //output ["A", "B", "C", "D", "E"]
