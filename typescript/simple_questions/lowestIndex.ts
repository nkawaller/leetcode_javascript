// Return the lowest index at which a value should be inserted
// into an array

const lowestIndex = (arr: number[], val: number): number => {
  arr.push(val);
  arr.sort();
  return arr.indexOf(val);
};

module.exports = lowestIndex;

/**
 * Tests
 */

let arrayWithoutVal: number[] = [1, 2, 3, 5, 6, 7, 8, 9];
let insertedValue: number = 4;

console.log(lowestIndex(arrayWithoutVal, insertedValue));