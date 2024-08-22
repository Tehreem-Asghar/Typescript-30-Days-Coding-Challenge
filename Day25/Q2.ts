// ### Question 2: Find the Smallest Divisor of a Number (Greater than 1)

function findSmallestDivisor(num: number): number {
    for (let i = 2; i <= num; i++) {
        if (num % i === 0) {
            return i;
        }
    }
    return num; 
}

const result = findSmallestDivisor(15);
console.log(result); // Output: 3
