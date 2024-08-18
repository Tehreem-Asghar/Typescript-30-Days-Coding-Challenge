// Question 1: Sum of Digits


function sumOfDigits(num: number) {
  let convertString: string = String(num);
  let convertArray: string[] = convertString.split("");
  let convertStrToNum: number[] = convertArray.map(Number);
  let addNum = convertStrToNum.reduce((acu, cur) => acu + cur, 0);

  console.log(addNum);
}


sumOfDigits(123); // Output: 6
sumOfDigits(4567); // Output: 22
