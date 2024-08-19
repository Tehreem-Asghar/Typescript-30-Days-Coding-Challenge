// ### Question 2: Calculate the Power of a Number
// Given a base number b and an exponent e, your task is to calculate b raised to the power
// of e without using built-in methods like Math.pow.

function calculatePower(b: number, e: number): number {
    
    let calculatePower : number =b ** e
    return calculatePower
}

// // Example usage
console.log(calculatePower(2, 3)); // Output: 8
console.log(calculatePower(5, 0)); // Output: 1
