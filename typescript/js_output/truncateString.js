"use strict";
const truncate = (str, len) => {
    if (str.length < len) {
        return str;
    }
    return `${str.slice(0, len)} ...`;
};
let fullLengthString = "This is the string we want to truncate";
console.log(truncate(fullLengthString, 15));
//# sourceMappingURL=truncateString.js.map