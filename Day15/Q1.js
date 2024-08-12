"use strict";
// ### Question 1: Anagrams
Object.defineProperty(exports, "__esModule", { value: true });
function areAnagrams(str1, str2) {
    // Convert to lowercase
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    // If lengths are different, they can not be anagrams so return false
    if (str1.length !== str2.length) {
        return false;
    }
    // Count Characters
    const charCount1 = new Array(26).fill(0);
    const charCount2 = new Array(26).fill(0);
    // Fill the frequency arrays
    for (let i = 0; i < str1.length; i++) {
        charCount1[str1.charCodeAt(i) - 97]++;
        charCount2[str2.charCodeAt(i) - 97]++;
    }
    // Compare Character Counts
    for (let i = 0; i < 26; i++) {
        if (charCount1[i] !== charCount2[i]) {
            return false;
        }
    }
    return true;
}
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world")); // false
