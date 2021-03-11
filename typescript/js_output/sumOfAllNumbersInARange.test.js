"use strict";
const { sumOfRange, sumOfRangeMinMax, sumOfRangeRecursive, sumOfRangeReduce, } = require("./sumOfAllNumbersInARange");
let arrOfTwoNumbers = [1, 3];
let unsortedArrofTwoNumbers = [3, 1];
let fiveAndTen = [5, 10];
let unsortedFiveAndTen = [10, 5];
test('Sum up all the numbers in a range', () => {
    expect(sumOfRange(arrOfTwoNumbers)).toEqual(6);
});
test('Sum up all the numbers in a range', () => {
    expect(sumOfRange(unsortedArrofTwoNumbers)).toEqual(6);
});
test('Sum up all the numbers in a range', () => {
    expect(sumOfRange(fiveAndTen)).toEqual(45);
});
test('Sum up all the numbers in a range', () => {
    expect(sumOfRange(unsortedFiveAndTen)).toEqual(45);
});
module.exports = {};
//# sourceMappingURL=sumOfAllNumbersInARange.test.js.map