"use strict";
const diffTwoArrays = require("./diffTwoArrays");
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6];
let stringArr1 = ["cat", "dog", "bird", "fish"];
let stringArr2 = ["bird", "fish", "pig", "horse"];
test("Find the symmetric difference between two arrays", () => {
    expect(diffTwoArrays(arr1, arr2)).toStrictEqual([1, 2, 3, 6]);
});
test("Find the symmetric difference between two arrays", () => {
    expect(diffTwoArrays(stringArr1, stringArr2)).toStrictEqual([
        "cat",
        "dog",
        "pig",
        "horse",
    ]);
});
module.exports = {};
//# sourceMappingURL=diffTwoArrays.test.js.map