"use strict";
const truncate = require("./truncateString");
let fullLengthString = "This is the string we want to truncate";
test("Truncate a string to a given length", () => {
    expect(truncate(fullLengthString, 15)).toMatch("This is the str...");
});
test("Test the edge case", () => {
    expect(truncate(fullLengthString, 45)).toMatch("This is the string we want to truncate");
});
module.exports = {};
//# sourceMappingURL=truncateString.test.js.map