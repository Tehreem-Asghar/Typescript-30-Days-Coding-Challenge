"use strict";
// ### Question 2: *Check if a String is a Palindrome*
Object.defineProperty(exports, "__esModule", { value: true });
function normalizeString(str) {
    return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}
function isPalindrome(str) {
    const normalizedStr = normalizeString(str);
    let left = 0;
    let right = normalizedStr.length - 1;
    while (left < right) {
        if (normalizedStr[left] !== normalizedStr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false
