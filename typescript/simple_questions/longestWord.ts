// Return the length of the longest word in a string

const findLongestWord = (str: string): number => {
  let lengths: number[] = str.split(" ").map((word) => word.length);
  return Math.max(...lengths);
};

module.exports = findLongestWord;

/**
 * Tests
 */

let stringOfWords: string = "Trying to find the longest word in this string";

console.log(findLongestWord(stringOfWords));
