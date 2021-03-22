export = {};

const { findElement, findStringElement } = require("./findersKeepers");

let numArr: number[] = [1, 2, 3, 4];

let stringArr: string[] = ["cat", "dog", "pig", "bird", "walrus"];

test("Find the first number in an array to meet a certian criteria", () => {
  expect(findElement(numArr, (num: number) => num > 3)).toBe(4);
});

test("Find the first string in an array to meet a certian criteria", () => {
  expect(findStringElement(stringArr, (string: string) => string.length > 4)).toBe(
    "walrus"
  );
});
