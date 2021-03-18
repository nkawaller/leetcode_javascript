"use strict";
const lowestIndex = (arr, val) => {
    arr.push(val);
    arr.sort();
    return arr.indexOf(val);
};
module.exports = lowestIndex;
//# sourceMappingURL=lowestIndex.js.map