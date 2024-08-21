// Question 1: *Generate Fibonacci Sequence*

function generateFibonacci(n: number): number[] {
    if (n <= 0) return []; // If n is 0 or negative, return an empty array
    if (n === 1) return [0]; // If n is 1, return an array with the first Fibonacci number [0]
  
    const fibonacciSequence = [0, 1]; //  first two Fibonacci numbers
  
    for (let i = 2; i < n; i++) {
      // Calculate the next number by adding the previous two numbers in the sequence
      const nextNum = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
      fibonacciSequence.push(nextNum); // Add the new number to the sequence
    }
  
    return fibonacciSequence; // Return the final Fibonacci sequence
  }
  
  // Example usage:
  console.log(generateFibonacci(5)); // Output: [0, 1, 1, 2, 3]
  console.log(generateFibonacci(7)); // Output: [0, 1, 1, 2, 3, 5, 8]
  console.log(generateFibonacci(0));// output: []
  console.log(generateFibonacci(1));// output: [0]
  
  
  