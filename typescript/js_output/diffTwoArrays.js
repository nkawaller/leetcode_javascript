"use strict";
const diffTwoArrays = (x, y) => {
    const filteredArr1 = x.filter((item) => !y.includes(item));
    const filteredArr2 = y.filter((item) => !x.includes(item));
    return filteredArr1.concat(filteredArr2);
};
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6];
let stringArr1 = ["cat", "dog", "bird", "fish"];
let stringArr2 = ["bird", "fish", "pig", "horse"];
console.log(diffTwoArrays(arr1, arr2));
console.log(diffTwoArrays(stringArr1, stringArr2));
module.exports = diffTwoArrays;
//# sourceMappingURL=diffTwoArrays.js.map