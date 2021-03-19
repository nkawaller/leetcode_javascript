"use strict";
const findLongestWord = (str) => {
    let lengths = str.split(" ").map((word) => word.length);
    return Math.max(...lengths);
};
module.exports = findLongestWord;
//# sourceMappingURL=longestWord.js.map