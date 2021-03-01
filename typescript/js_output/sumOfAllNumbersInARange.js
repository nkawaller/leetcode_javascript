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
let arrOfTwoNumbers = [1, 3];
let unsortedArrofTwoNumbers = [3, 1];
let fiveAndTen = [5, 10];
let unsortedFiveAndTen = [10, 5];
console.log(sumOfRange(arrOfTwoNumbers));
console.log(sumOfRange(unsortedArrofTwoNumbers));
console.log(sumOfRange(fiveAndTen));
console.log(sumOfRange(unsortedFiveAndTen));
console.log(sumOfRangeMinMax(fiveAndTen));
console.log(sumOfRangeMinMax(unsortedFiveAndTen));
console.log(sumOfRangeReduce(fiveAndTen));
console.log(sumOfRangeReduce(unsortedFiveAndTen));
//# sourceMappingURL=sumOfAllNumbersInARange.js.map