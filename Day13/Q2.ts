//Question 2: Find the Missing Number in an Array

function findMissingNumber(arr: number[]): number {
    const n = arr.length + 1; 
    const expectedSum = (n * (n + 1)) / 2; // Sum of first n natural numbers
    
    let actualSum = 0;
    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i];
    }
    
    return expectedSum - actualSum; // The difference is the missing number
}

// Example usage:
console.log(findMissingNumber([1, 2, 4, 5])); // Output: 3
console.log(findMissingNumber([3, 7, 1, 2, 8, 4, 5])); // Output: 6
