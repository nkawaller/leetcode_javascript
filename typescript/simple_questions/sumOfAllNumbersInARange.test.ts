export = {};
const {
  sumOfRange,
  sumOfRangeMinMax,
  sumOfRangeRecursive,
  sumOfRangeReduce,
} = require("./sumOfAllNumbersInARange");

let arrOfTwoNumbers = [1, 3];
let unsortedArrofTwoNumbers = [3, 1];
let fiveAndTen = [5, 10];
let unsortedFiveAndTen = [10, 5];

test("Sum up all the numbers in a range", () => {
  expect(sumOfRange(arrOfTwoNumbers)).toEqual(6);
});
test("Sum up all the numbers in a range", () => {
  expect(sumOfRange(unsortedArrofTwoNumbers)).toEqual(6);
});
test("Sum up all the numbers in a range", () => {
  expect(sumOfRange(fiveAndTen)).toEqual(45);
});
test("Sum up all the numbers in a range", () => {
  expect(sumOfRange(unsortedFiveAndTen)).toEqual(45);
});

test("Sum up all the numbers in a range", () => {
  expect(sumOfRangeMinMax(arrOfTwoNumbers)).toEqual(6);
});
test("Sum up all the numbers in a range", () => {
  expect(sumOfRangeMinMax(unsortedArrofTwoNumbers)).toEqual(6);
});
test("Sum up all the numbers in a range", () => {
  expect(sumOfRangeMinMax(fiveAndTen)).toEqual(45);
});
test("Sum up all the numbers in a range", () => {
  expect(sumOfRangeMinMax(unsortedFiveAndTen)).toEqual(45);
});

test("Sum up all the numbers in a range", () => {
  expect(sumOfRangeRecursive(arrOfTwoNumbers)).toEqual(6);
});
test("Sum up all the numbers in a range", () => {
  expect(sumOfRangeRecursive(unsortedArrofTwoNumbers)).toEqual(6);
});
test("Sum up all the numbers in a range", () => {
  expect(sumOfRangeRecursive(fiveAndTen)).toEqual(45);
});
test("Sum up all the numbers in a range", () => {
  expect(sumOfRangeRecursive(unsortedFiveAndTen)).toEqual(45);
});

test("Sum up all the numbers in a range", () => {
  expect(sumOfRangeReduce(arrOfTwoNumbers)).toEqual(6);
});
test("Sum up all the numbers in a range", () => {
  expect(sumOfRangeReduce(unsortedArrofTwoNumbers)).toEqual(6);
});
test("Sum up all the numbers in a range", () => {
  expect(sumOfRangeReduce(fiveAndTen)).toEqual(45);
});
test("Sum up all the numbers in a range", () => {
  expect(sumOfRangeReduce(unsortedFiveAndTen)).toEqual(45);
});
