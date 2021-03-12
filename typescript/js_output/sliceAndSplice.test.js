"use strict";
const sliceAndSplice = require("./sliceAndSplice");
let firstArray = [1, 5];
let secondArray = [2, 3, 4];
test("Insert one array into another at a given index", () => {
    expect(sliceAndSplice(firstArray, secondArray, 1)).toEqual([1, 2, 3, 4, 5]);
});
module.exports = {};
//# sourceMappingURL=sliceAndSplice.test.js.map