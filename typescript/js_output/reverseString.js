"use strict";
const reverseString = (s) => {
    return s.split('').reverse().join('');
};
const reverseOneLine = (s) => s.split('').reverse().join('');
const reverseStringForOf = (s) => {
    let result = '';
    let charArray = s.split('');
    for (let i of charArray) {
        result = i + result;
    }
    return result;
};
let a = 'Typescript reverse string';
console.log(reverseString(a));
console.log(reverseOneLine(a));
console.log(reverseStringForOf(a));
//# sourceMappingURL=reverseString.js.map