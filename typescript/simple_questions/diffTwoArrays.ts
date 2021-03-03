// Compare two arrays and return a new array with any items found
// in only one of the arrays (symmetric difference)

const diffTwoArrays = (x: number[], y: number[]): number[] => {
  const a: number[] = x.filter((item) => !y.includes(item));
  const b: number[] = y.filter((item) => !x.includes(item));
  const difference: number[] = a.concat(b);
  return difference;
};

let arr1: number[] = [1, 2, 3, 4, 5];
let arr2: number[] = [4, 5, 6];

console.log(diffTwoArrays(arr1, arr2));
