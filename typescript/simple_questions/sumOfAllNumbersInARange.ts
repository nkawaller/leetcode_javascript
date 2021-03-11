// Given an array of two numbers, find the sum of those two
// numbers, plus all the numbers in between. The smallest
// number won't always come first.

/**
 * Using sort()
 */

const sumOfRange = (arr: number[]): number => {
  let result: number = 0;
  arr = arr.sort((a, b) => a - b);
  for (let i = arr[0]; i <= arr[1]; i++) {
    result += i;
  }
  return result;
};

/**
 * Using Math.min and Math.max
 */

const sumOfRangeMinMax = (arr: number[]): number => {
  let result = 0;
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  for (let i = min; i <= max; i++) {
    result += i;
  }
  return result;
};

/**
 * Using reduce()
 */

const sumOfRangeReduce = (arr: number[]): number => {
  let result: number[] = [];
  arr = arr.sort((a, b) => a - b);
  for (let i = arr[0]; i <= arr[1]; i++) {
    result.push(i);
  }
  return result.reduce((acc, num) => acc + num, 0);
};

/**
 * Using recursion
 */

const sumOfRangeRecursive = (arr: number[]): number => {
  arr = arr.sort((a, b) => a - b);
  if (arr[0] == arr[1]) {
    return arr[0];
  } else {
    return arr[1] + sumOfRangeRecursive([arr[0], arr[1] - 1]);
  }
};

module.exports = {
  sumOfRange,
  sumOfRangeMinMax,
  sumOfRangeRecursive,
  sumOfRangeReduce
}

/**
 * Tests
 */

let arrOfTwoNumbers = [1, 3];
let unsortedArrofTwoNumbers = [3, 1];
let fiveAndTen = [5, 10];
let unsortedFiveAndTen = [10, 5];
console.log(sumOfRange(arrOfTwoNumbers));
console.log(sumOfRange(unsortedArrofTwoNumbers));
console.log(sumOfRange(fiveAndTen));
console.log(sumOfRange(unsortedFiveAndTen));
console.log(sumOfRangeMinMax(fiveAndTen));
console.log(sumOfRangeMinMax(unsortedFiveAndTen));
console.log(sumOfRangeReduce(fiveAndTen));
console.log(sumOfRangeReduce(unsortedFiveAndTen));
console.log(sumOfRangeRecursive(fiveAndTen));
console.log(sumOfRangeRecursive(unsortedFiveAndTen));
