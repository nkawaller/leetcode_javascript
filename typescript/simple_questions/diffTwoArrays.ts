// Compare two arrays and return a new array with any items found
// in only one of the arrays (symmetric difference)

const diffTwoArrays = (x: any[], y: any[]): any[] => {
  const filteredArr1: any[] = x.filter((item) => !y.includes(item));
  const filteredArr2: any[] = y.filter((item) => !x.includes(item));
  return filteredArr1.concat(filteredArr2);
};

/**
 * Tests
 */

let arr1: number[] = [1, 2, 3, 4, 5];
let arr2: number[] = [4, 5, 6];
let stringArr1: string[] = ["cat", "dog", "bird", "fish"];
let stringArr2: string[] = ["bird", "fish", "pig", "horse"];

console.log(diffTwoArrays(arr1, arr2));
console.log(diffTwoArrays(stringArr1, stringArr2));

module.exports = diffTwoArrays;
