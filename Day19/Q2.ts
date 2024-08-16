// ### Question 2: String Character Frequency

function charFrequency(str: string): Record<string, number> {
  const frequency: Record<string, number> = {};

  for (const char of str) {
    if (frequency[char]) {
      frequency[char]++;
    } else {
      frequency[char] = 1;
    }
  }

  return frequency;
}

// Example usage:
const inputString = "hello";
console.log(charFrequency(inputString)); // Output: { h: 1, e: 1, l: 2, o: 1 }
