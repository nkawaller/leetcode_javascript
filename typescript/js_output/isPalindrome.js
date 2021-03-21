"use strict";
const isPalForEach = (s) => {
    const cleanS = s.toLowerCase().replace(/[\W_]/g, "");
    let isPal = true;
    cleanS.split("").forEach((c, i) => {
        if (c !== cleanS[cleanS.length - i - 1]) {
            isPal = false;
        }
    });
    return isPal;
};
const isPalReduce = (s) => {
    const cleanS = s.toLowerCase().replace(/[\W_]/g, "");
    return cleanS.split("").reduceRight((match, c, i) => {
        if (!match) {
            return false;
        }
        return c === cleanS[cleanS.length - 1 - i];
    }, true);
};
const isPalEvery = (s) => {
    const cleanS = s.toLowerCase().replace(/[\W_]/g, "");
    return cleanS.split("").every((c, i) => c === cleanS[cleanS.length - 1 - i]);
};
module.exports = {
    isPalForEach,
    isPalReduce,
    isPalEvery,
};
//# sourceMappingURL=isPalindrome.js.map