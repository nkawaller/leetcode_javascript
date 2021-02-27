"use strict";
const confirmEndingOneLine = (str1, str2) => {
    return str1.endsWith(str2);
};
const confirmEndingSlice = (str1, str2) => {
    return str1.slice(-str2.length) === str2;
};
let confirmStr1 = "Learning Typescript";
let confirmStr2 = "script";
let confirmStr3 = "Learning";
console.log(confirmEndingOneLine(confirmStr1, confirmStr2));
console.log(confirmEndingOneLine(confirmStr1, confirmStr3));
console.log(confirmEndingSlice(confirmStr1, confirmStr2));
console.log(confirmEndingSlice(confirmStr1, confirmStr3));
//# sourceMappingURL=confirmEnding.js.map