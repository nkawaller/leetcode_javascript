// Return true if two strings have the same ending

const confirmEndingOneLine = (str1: string, str2: string): boolean => {
  return str1.endsWith(str2);
};

const confirmEndingSlice = (str1: string, str2: string): boolean => {
  return str1.slice(-str2.length) === str2;
};

module.exports = { confirmEndingOneLine, confirmEndingSlice };

/**
 * Tests
 */

let confirmStr1: string = "Learning Typescript";
let confirmStr2: string = "script";
let confirmStr3: string = "Learning";

console.log(confirmEndingOneLine(confirmStr1, confirmStr2)); // returns true
console.log(confirmEndingOneLine(confirmStr1, confirmStr3)); // returns false
console.log(confirmEndingSlice(confirmStr1, confirmStr2)); // returns true
console.log(confirmEndingSlice(confirmStr1, confirmStr3)); // returns false
