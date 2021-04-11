const largestNumber = require("./largestNumbersInArrays");

let a = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

test("Return the largest number from each array", () => {
  expect(largestNumber(a)).toStrictEqual([3, 3, 3]);
});
