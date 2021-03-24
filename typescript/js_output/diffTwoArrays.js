"use strict";
const diffTwoArrays = (x, y) => {
    const filteredArr1 = x.filter((item) => !y.includes(item));
    const filteredArr2 = y.filter((item) => !x.includes(item));
    return filteredArr1.concat(filteredArr2);
};
module.exports = diffTwoArrays;
//# sourceMappingURL=diffTwoArrays.js.map