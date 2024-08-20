// ### Question 1: Calculate the Factorial of a Number
// Task: Write a function calculateFactorial that takes a number as input 
//and returns its factorial.

// Hint: Factorial means multiplying a number by all positive integers less than
//it. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.


function calculateFactorial(num: number): number {
    if (num === 0 || num === 1) {
        return 1;
    }
    let factorial = 1;
    for (let i = 2; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}

// Example usage:
console.log(calculateFactorial(5)); // Output: 120
console.log(calculateFactorial(6));// Output : 720
