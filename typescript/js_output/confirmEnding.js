"use strict";
const confirmEndingOneLine = (str1, str2) => {
    return str1.endsWith(str2);
};
const confirmEndingSlice = (str1, str2) => {
    return str1.slice(-str2.length) === str2;
};
module.exports = { confirmEndingOneLine, confirmEndingSlice };
//# sourceMappingURL=confirmEnding.js.map