"use strict";
const { findElement, findStringElement } = require("./findersKeepers");
let numArr = [1, 2, 3, 4];
let stringArr = ["cat", "dog", "pig", "bird", "walrus"];
test("Find the first number in an array to meet a certian criteria", () => {
    expect(findElement(numArr, (num) => num > 3)).toBe(4);
});
module.exports = {};
//# sourceMappingURL=findersKeepers.test.js.map