"use strict";
//### Question 1: Sum of an Array
// *Instructions:*
// 1. Write a function named sumArray that takes an array of numbers as input.
// 2. The function should return the sum of all numbers in the array.
// 3. Ensure your function works correctly by testing it with different inputs.
// *Example:*
// - Input: [1, 2, 3, 4, 5]
// - Output: 15
// make a function that accept only number of array and retun array of all element sum using for Loop.
function sumArray(array) {
    let addNumbers = 0;
    for (let i = 0; i < array.length; i++) {
        addNumbers += array[i];
    }
    return addNumbers;
}
console.log(sumArray([1, 2, 3, 4, 5])); // outPut : 15
// using by reduce Method
function SumArray(arr) {
    return arr.reduce((acc, cur) => acc + cur, 0);
}
console.log(SumArray([1, 2, 3, 4, 5])); // outPut : 15
// Question 2: Reverse a String
// Instructions:
// Write a function named reverseString that takes a string as input.
// The function should return the reversed version of the input string.
// Ensure your function works correctly by testing it with different inputs.
// Example:
// Input: "hello"
// Output: "olleh"
// using by builten method
function reverseString(input) {
    console.log(`Orignal Input : ${input}`);
    let reverse = input.split("").reverse().join("");
    return `Reverse Input : ${reverse}`;
}
console.log(reverseString("hello"));
// using by for loop
function ReverseString(input) {
    console.log(`Orignal Input : ${input}`);
    let reverse = "";
    for (let i = input.length - 1; i >= 0; i--) {
        reverse += input[i];
    }
    return `Reverse Input : ${reverse}`;
}
console.log(ReverseString("hello"));
