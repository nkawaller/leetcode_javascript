"use strict";
const sliceAndSplice = (arr1, arr2, val) => {
    let newArr = [...arr1];
    newArr.splice(val, 0, ...arr2);
    return newArr;
};
let firstArray = [1, 5];
let secondArray = [2, 3, 4];
console.log(sliceAndSplice(firstArray, secondArray, 1));
//# sourceMappingURL=sliceAndSplice.js.map