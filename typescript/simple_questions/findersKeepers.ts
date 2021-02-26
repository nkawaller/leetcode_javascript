// Find the first element in an array that meets a criteria

let numArr: number[] = [1, 2, 3, 4];

interface numFunc {
    (num: number): boolean
}

const findElement = (arr: number[], num: numFunc): any => {
  return arr.find(num);
};

console.log(findElement(numArr, (num) => num > 3));

// let stringArr: string[] = ["cat", "dog", "pig", "bird", "walrus"];

// console.log(findElement(stringArr, (string) => string.length > 4));
