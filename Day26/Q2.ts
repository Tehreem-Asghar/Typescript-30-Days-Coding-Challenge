// ### Question 2: Find the Average of Numbers in a String

// Write a function averageOfNumbersInString(str: string): number that extracts all numbers from a given string, calculates their average, and returns the result.


function averageOfNumbersInString(str: string): number {
    let sum = 0;
    let count = 0;
    let currentNumber = '';

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (!isNaN(parseInt(char))) {
            currentNumber += char;
        } else if (currentNumber !== '') {
            sum += parseInt(currentNumber);
            count++;
            currentNumber = '';
        }
    }

    // To account for any number at the end of the string
    if (currentNumber !== '') {
        sum += parseInt(currentNumber);
        count++;
    }

    return count > 0 ? sum / count : NaN;
}

console.log(averageOfNumbersInString('The numbers are 12, 15, and 20.')); // Output: 15.666...
console.log(averageOfNumbersInString('No numbers here!')); // Output: NaN
