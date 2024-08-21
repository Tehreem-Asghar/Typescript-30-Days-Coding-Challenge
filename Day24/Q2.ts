 //Question 2: *Replace Vowels with Asterisks*

function replaceVowels(str: string): string {
  
    const vowelsRegex = /[aeiou]/gi;
  
    // Replace all vowels with asterisks
    return str.replace(vowelsRegex, '*');
  }
  
  // Example usage:
  console.log(replaceVowels('Hello World')); // Output: 'H*ll* W*rld'
  console.log(replaceVowels('TypeScript'));  // Output: 'Typ*Scr*pt'
  