"use strict";
function fact(n) {
    let result = 1;
    for (let i = 1; i < n + 1; i++) {
        result *= i;
    }
    return result;
}
const factForOf = (arr) => {
    let result = 1;
    for (let i of arr) {
        result *= i;
    }
    return result;
};
const factRecursive = (n) => {
    if (n == 1) {
        return 1;
    }
    else {
        return n * factRecursive(n - 1);
    }
};
const factReduce = (arr) => {
    return arr.reduce((result, i) => result * i);
};
module.exports = { fact, factForOf, factRecursive, factReduce };
//# sourceMappingURL=factorial.js.map