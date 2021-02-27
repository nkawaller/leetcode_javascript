"use strict";
const findLongestWord = (str) => {
    let lengths = str.split(" ").map((word) => word.length);
    return Math.max(...lengths);
};
let stringOfWords = "Trying to find the longest word in this string";
console.log(findLongestWord(stringOfWords));
//# sourceMappingURL=longestWord.js.map