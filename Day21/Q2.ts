// ### Question 2: Count Consonants in a String

function countConsonants(str: string) {
  let alpha = "aeiouAEIOU";
  let num = 0;

  for (let i = 0; i < str.length; i++) {
    let lowerCase = str[i].toLowerCase();
    if (!alpha.includes(lowerCase)) {
      num++;
    }
  }
  console.log(num);
}

// *Example:*
countConsonants("hello"); // Output: 3
countConsonants("TypeScript"); // Output: 7
