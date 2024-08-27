// **Question 2: Calculate the Sum of the First n Natural Numbers**

function sumOfNaturalNumbers(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumOfNaturalNumbers(5)); //output : 15
console.log(sumOfNaturalNumbers(2));//output : 3


