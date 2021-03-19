export = {};

const findLongestWord = require("./longestWord");

let stringOfWords: string = "Trying to find the longest word in this string";

test("Find the length of the longest word in a string", () => {
  expect(findLongestWord(stringOfWords)).toBe(7);
});
