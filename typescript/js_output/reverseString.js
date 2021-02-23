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
let forwardString = 'Typescript reverse string';
console.log(reverseString(forwardString));
console.log(reverseOneLine(forwardString));
console.log(reverseStringForOf(forwardString));
//# sourceMappingURL=reverseString.js.map