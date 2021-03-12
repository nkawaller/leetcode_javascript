"use strict";
const sliceAndSplice = (arr1, arr2, val) => {
    let newArr = [...arr1];
    newArr.splice(val, 0, ...arr2);
    return newArr;
};
module.exports = sliceAndSplice;
//# sourceMappingURL=sliceAndSplice.js.map