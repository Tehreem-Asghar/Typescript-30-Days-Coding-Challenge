"use strict";
// ### Question 2: *Find the Longest Word in a Sentence*
Object.defineProperty(exports, "__esModule", { value: true });
function findLongestWord(sentence) {
    // Split the sentence into words
    const words = sentence.split(" ");
    // Initialize a variable to hold the longest word
    let longestWord = words[0];
    // Iterate through the words array
    for (let i = 1; i < words.length; i++) {
        // Compare the current word's length with the longest word's length
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}
// Test cases
console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // Output: "quick"
console.log(findLongestWord("I love coding in TypeScript")); // Output: "TypeScript"
