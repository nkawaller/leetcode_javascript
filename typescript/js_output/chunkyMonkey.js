"use strict";
const chunkyMonkey = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
};
module.exports = chunkyMonkey;
//# sourceMappingURL=chunkyMonkey.js.map