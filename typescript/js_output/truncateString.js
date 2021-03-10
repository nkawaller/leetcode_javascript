"use strict";
const truncate = (str, len) => {
    if (str.length < len) {
        return str;
    }
    return `${str.slice(0, len)}...`;
};
module.exports = truncate;
//# sourceMappingURL=truncateString.js.map