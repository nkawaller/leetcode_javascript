"use strict";
const lowestIndex = (arr, val) => {
    arr.push(val);
    arr.sort();
    return arr.indexOf(val);
};
module.exports = lowestIndex;
let arrayWithoutVal = [1, 2, 3, 5, 6, 7, 8, 9];
let insertedValue = 4;
console.log(lowestIndex(arrayWithoutVal, insertedValue));
//# sourceMappingURL=lowestIndex.js.map