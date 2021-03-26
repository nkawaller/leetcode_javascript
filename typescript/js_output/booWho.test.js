"use strict";
const booWho = require("./booWho");
let boolCheckTrue = true;
let boolCheckFalse = "hello";
test("Check whether a value is a boolean", () => {
    expect(booWho(boolCheckTrue)).toBeTruthy;
});
test("Check whether a value is a boolean", () => {
    expect(booWho(boolCheckFalse)).toBeFalsy;
});
module.exports = {};
//# sourceMappingURL=booWho.test.js.map