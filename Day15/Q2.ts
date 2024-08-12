// ### Question 2: Reverse Words in a Sentence

function reverseWords(sentence: string): string {
  // Split on space and filter out empty strings
  const words = sentence.split(" ").filter((word) => word !== "");

  // Reverse the order of words
  const reversedWords = words.reverse();

  // Join the words back into a sentence
  const reversedSentence = reversedWords.join(" ");

  return reversedSentence;
}

console.log(reverseWords("Hello world")); // output :  "world Hello"
console.log(reverseWords("  This is a test  ")); // output :  "test a is This"
console.log(reverseWords("TypeScript is fun")); // output : // "fun is TypeScript"
