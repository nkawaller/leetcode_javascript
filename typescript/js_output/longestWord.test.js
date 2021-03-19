"use strict";
const findLongestWord = require("./longestWord");
let stringOfWords = "Trying to find the longest word in this string";
test("Find the length of the longest word in a string", () => {
    expect(findLongestWord(stringOfWords)).toBe(7);
});
module.exports = {};
//# sourceMappingURL=longestWord.test.js.map