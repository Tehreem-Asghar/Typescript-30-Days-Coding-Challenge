// ### Question:2 *Concatenate Strings from Arrays*

function concatenateFirstLetters(arr1: string[], arr2: string[], arr3: string[]): string[] {

    //concatenate first letters of strings in an array
    const concatenate = (arr: string[]): string => {
      return arr.map(str => str[0]).join('');
    };
  
    //Concatenate first letters for each array
    const result1 = concatenate(arr1);
    const result2 = concatenate(arr2);
    const result3 = concatenate(arr3);
  
    // Return the concatenated results as an array
    return [result1, result2, result3];
  }
  
console.log(concatenateFirstLetters(["apple", "banana", "cherry"], ["dog", "elephant", "frog"], ["grape", "honeydew", "kiwi"]));// Output: ["abc", "def", "ghk"]
  
console.log(concatenateFirstLetters(["sun", "moon"], ["star", "planet"], ["galaxy", "comet"]));// Output: ["sm", "sp", "gc"]
  
console.log(concatenateFirstLetters(["table", "chair", "lamp"], ["carpet", "curtain", "sofa"], ["desk", "shelf", "cabinet"]));// Output: ["tcl", "ccs", "dsc"]