"use strict";
const { confirmEndingOneLine, confirmEndingSlice } = require("./confirmEnding");
let confirmStr1 = "Learning Typescript";
let confirmStr2 = "script";
let confirmStr3 = "Learning";
test("Determine whether two string have the same ending", () => {
    expect(confirmEndingOneLine(confirmStr1, confirmStr2)).toBeTruthy;
});
test("Determine whether two string have the same ending", () => {
    expect(confirmEndingOneLine(confirmStr1, confirmStr3)).toBeTruthy;
});
test("Determine whether two string have the same ending", () => {
    expect(confirmEndingSlice(confirmStr1, confirmStr2)).toBeTruthy;
});
test("Determine whether two string have the same ending", () => {
    expect(confirmEndingSlice(confirmStr1, confirmStr3)).toBeTruthy;
});
module.exports = {};
//# sourceMappingURL=confirmEnding.test.js.map