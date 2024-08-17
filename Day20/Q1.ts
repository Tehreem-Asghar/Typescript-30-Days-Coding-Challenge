// Question 1: Check for Prime Number

function isPrime(num: number): boolean {
    if (num <= 1) return false; 
    if (num === 2) return true;  
    if (num % 2 === 0) return false; 

    const sqrt = Math.sqrt(num);
    for (let i = 3; i <= sqrt; i += 2) {
        if (num % i === 0) return false;
    }

    return true; 
}

console.log(isPrime(11)); //output: true
console.log(isPrime(15)); //output: false
console.log(isPrime(2));  //output: true
console.log(isPrime(1));  //output: false
