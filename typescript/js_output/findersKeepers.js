"use strict";
let numArr = [1, 2, 3, 4];
const findElement = (arr, func) => {
    return arr.find(func);
};
console.log(findElement(numArr, (num) => num % 2 == 0));
let stringArr = ["cat", "dog", "pig", "bird", "walrus"];
console.log(findElement(stringArr, (string) => string.length > 4));
//# sourceMappingURL=findersKeepers.js.map