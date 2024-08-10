// Question 1: Count Vowels in a String

function countVowels(str: string): number {
  let countVowels = 0;

  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "a":
      case "A":
      case "e":
      case "E":
      case "i":
      case "I":
      case "O":
      case "o":
      case "u":
      case "U":
        countVowels++;
        break;
    }
  }
  return countVowels;
}

console.log(countVowels("hello world")); // Output: 3
console.log(countVowels("TypeScript")); // Output: 2
