"use strict";
const sumOfRange = (arr) => {
    let result = 0;
    arr = arr.sort((a, b) => a - b);
    for (let i = arr[0]; i <= arr[1]; i++) {
        result += i;
    }
    return result;
};
const sumOfRangeMinMax = (arr) => {
    let result = 0;
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    for (let i = min; i <= max; i++) {
        result += i;
    }
    return result;
};
const sumOfRangeReduce = (arr) => {
    let result = [];
    arr = arr.sort((a, b) => a - b);
    for (let i = arr[0]; i <= arr[1]; i++) {
        result.push(i);
    }
    return result.reduce((acc, num) => acc + num, 0);
};
const sumOfRangeRecursive = (arr) => {
    arr = arr.sort((a, b) => a - b);
    if (arr[0] == arr[1]) {
        return arr[0];
    }
    else {
        return arr[1] + sumOfRangeRecursive([arr[0], arr[1] - 1]);
    }
};
module.exports = {
    sumOfRange,
    sumOfRangeMinMax,
    sumOfRangeRecursive,
    sumOfRangeReduce,
};
//# sourceMappingURL=sumOfAllNumbersInARange.js.map