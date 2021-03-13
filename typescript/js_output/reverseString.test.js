"use strict";
const { reverseString, reverseOneLine, reverseStringForOf, } = require("./reverseString");
let forwardString = "Typescript reverse string";
test("Reverse a string", () => {
    expect(reverseString(forwardString)).toMatch("gnirts esrever tpircsepyT");
});
test("Reverse a string", () => {
    expect(reverseOneLine(forwardString)).toMatch("gnirts esrever tpircsepyT");
});
test("Reverse a string", () => {
    expect(reverseStringForOf(forwardString)).toMatch("gnirts esrever tpircsepyT");
});
module.exports = {};
//# sourceMappingURL=reverseString.test.js.map