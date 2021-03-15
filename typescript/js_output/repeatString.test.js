"use strict";
const { repeatString, repeatStringOneLine, repeatStringWhile, repeatStringRecursive, } = require("./repeatString");
test("Repeat a string a given amount of times", () => {
    expect(repeatStringOneLine("test", 3)).toBe("testtesttest");
});
test("Repeat a string a given amount of times", () => {
    expect(repeatString("test", 3)).toBe("testtesttest");
});
test("Repeat a string a given amount of times", () => {
    expect(repeatStringWhile("test", 3)).toBe("testtesttest");
});
test("Repeat a string a given amount of times", () => {
    expect(repeatStringRecursive("test", 3)).toBe("testtesttest");
});
module.exports = {};
//# sourceMappingURL=repeatString.test.js.map