"use strict";
const sumOfRange = (arr) => {
    let result = 0;
    arr = arr.sort();
    for (let i = arr[0]; i <= arr[1]; i++) {
        result += i;
    }
    return result;
};
let arrOfTwoNumbers = [1, 3];
console.log(sumOfRange(arrOfTwoNumbers));
//# sourceMappingURL=sumOfAllNumbersInARange.js.map