// ### Question 1: Calculate the Difference Between the Sum of Odd and Even Digits

function calculateDifference(num: number) {
    const digits: number[] = String(num).split("").map(Number);
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < digits.length; i++) {
        if (digits[i] % 2 === 0) {
            evenSum += digits[i];
        } else {
            oddSum += digits[i];
        }
    }

    const difference = Math.abs(oddSum - evenSum);
    console.log(difference);
}

calculateDifference(1234);  // output : 2
calculateDifference(243137)// output :8

