"use strict";
const chunkyMonkey = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
};
let fullArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(chunkyMonkey(fullArray, 3));
//# sourceMappingURL=chunkyMonkey.js.map