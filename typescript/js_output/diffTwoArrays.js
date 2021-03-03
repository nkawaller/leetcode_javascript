"use strict";
const diffTwoArrays = (x, y) => {
    const a = x.filter((item) => !y.includes(item));
    const b = y.filter((item) => !x.includes(item));
    const difference = a.concat(b);
    return difference;
};
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6];
console.log(diffTwoArrays(arr1, arr2));
//# sourceMappingURL=diffTwoArrays.js.map