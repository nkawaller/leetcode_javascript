"use strict";
const repeatStringOneLine = (s, n) => s.repeat(n);
const repeatString = (s, n) => {
    let result = "";
    for (let i = 0; i < n; i++) {
        result += s;
    }
    return result;
};
const repeatStringWhile = (s, n) => {
    let result = "";
    while (n > 0) {
        result += s;
        n--;
    }
    return result;
};
const repeatStringRecursive = (s, n) => {
    if (n === 1) {
        return s;
    }
    else {
        return s + repeatStringRecursive(s, n - 1);
    }
};
module.exports = {
    repeatStringOneLine,
    repeatString,
    repeatStringWhile,
    repeatStringRecursive,
};
//# sourceMappingURL=repeatString.js.map