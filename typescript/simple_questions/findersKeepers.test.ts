export = {};

const { findElement, findStringElement } = require("./findersKeepers");

let numArr: number[] = [1, 2, 3, 4];

let stringArr: string[] = ["cat", "dog", "pig", "bird", "walrus"];

test("Find the first number in an array to meet a certian criteria", () => {
  expect(findElement(numArr, (num: number) => num > 3)).toBe(4);
});
