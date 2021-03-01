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
let unsortedArrofTwoNumbers = [3, 1];
console.log(sumOfRange(arrOfTwoNumbers));
console.log(sumOfRange(unsortedArrofTwoNumbers));
//# sourceMappingURL=sumOfAllNumbersInARange.js.map