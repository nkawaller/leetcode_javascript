"use strict";
let numArr = [1, 2, 3, 4];
const findElement = (arr, num) => {
    return arr.find(num);
};
console.log(findElement(numArr, (num) => num > 3));
let stringArr = ["cat", "dog", "pig", "bird", "walrus"];
const findStringElement = (arr, str) => {
    return arr.find(str);
};
console.log(findStringElement(stringArr, (string) => string.length > 4));
module.exports = { findElement, findStringElement };
//# sourceMappingURL=findersKeepers.js.map