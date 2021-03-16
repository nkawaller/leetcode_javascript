"use strict";
const { removeFalseOne, removeFalse, removeFalseForIn, removeFalseForOf, } = require("./remove_false_values");
let arrOfBools = [true, true, false, true, false];
test("Remove all false values from an array", () => {
    expect(removeFalseOne(arrOfBools)).toStrictEqual([true, true, true]);
});
test("Remove all false values from an array", () => {
    expect(removeFalse(arrOfBools)).toStrictEqual([true, true, true]);
});
test("Remove all false values from an array", () => {
    expect(removeFalseForIn(arrOfBools)).toStrictEqual([true, true, true]);
});
test("Remove all false values from an array", () => {
    expect(removeFalseForOf(arrOfBools)).toStrictEqual([true, true, true]);
});
module.exports = {};
//# sourceMappingURL=remove_false_values.test.js.map