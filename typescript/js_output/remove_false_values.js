"use strict";
const removeFalseOne = (arr) => arr.filter(Boolean);
const removeFalse = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            result.push(arr[i]);
        }
    }
    return result;
};
const removeFalseForOf = (arr) => {
    let result = [];
    for (let i of arr) {
        if (i) {
            result.push(i);
        }
    }
    return result;
};
const removeFalseForIn = (arr) => {
    let result = [];
    for (let i in arr) {
        if (arr[i]) {
            result.push(arr[i]);
        }
    }
    return result;
};
let a = [true, true, false, true, false];
console.log(removeFalseOne(a));
console.log(removeFalse(a));
console.log(removeFalseForOf(a));
console.log(removeFalseForIn(a));
//# sourceMappingURL=remove_false_values.js.map