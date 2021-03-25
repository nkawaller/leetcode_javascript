export = {};

const chunkyMonkey = require("./chunkyMonkey");

let fullArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

test("Split an array into groups of a specified size", () => {
  expect(chunkyMonkey(fullArray, 3)).toStrictEqual([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]);
});
