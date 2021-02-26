// Find the first element in an array that meets a criteria

let numArr: number[] = [1, 2, 3, 4];

const findElement = (arr: number[], func: any): any => {
  return arr.find(func);
};

console.log(findElement(numArr, (num) => num % 2 == 0));

let stringArr: string[] = ["cat", "dog", "pig", "bird", "walrus"];

console.log(findElement(stringArr, (string) => string.length > 4));
