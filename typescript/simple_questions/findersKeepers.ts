// Find the first element in an array that meets a criteria

let numArr: number[] = [1, 2, 3, 4];

interface numFunc {
  (num: number): boolean;
}

const findElement = (arr: number[], num: numFunc): any => {
  return arr.find(num);
};

interface stringFunc {
  (str: string): boolean;
}

let stringArr: string[] = ["cat", "dog", "pig", "bird", "walrus"];

const findStringElement = (arr: string[], str: stringFunc): any => {
  return arr.find(str);
};

module.exports = { findElement, findStringElement };
