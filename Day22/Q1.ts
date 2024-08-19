// ### Question 1: Count Digits in a Number
// Given a number, your task is to count and return the number of digits in that number.

function countDigits(num: number): number {
   
    let DigitNum : number = String(num).length
    return DigitNum
    
}

// Example usage
console.log(countDigits(12345)); // Output: 5
console.log(countDigits(987));   // Output: 3