// ### Question: 2 *Filter and Square Even Numbers*
// Write a function that takes an array of numbers as input. The function should filter out all
//the even numbers from the array, square each of those even numbers, and return a new array
// containing these squared values.

function squareEvenNumbers(numbers: number[]): number[] {
  let EvenNum: number[] = numbers.filter((E) => E % 2 == 0);
  let squarOfEven: number[] = [];

  for (let i = 0; i < EvenNum.length; i++) {
    squarOfEven.push(EvenNum[i] * EvenNum[i]);
  }

  return squarOfEven;
}

console.log(squareEvenNumbers([1, 2, 3, 4, 5, 6]));
// - Output: [4, 16, 36]

