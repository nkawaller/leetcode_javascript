"use strict";
const TitleCase = (s) => {
    return s
        .toLowerCase()
        .split(" ")
        .map((word) => {
        return word[0].toUpperCase() + word.slice(1);
    })
        .join(" ");
};
module.exports = TitleCase;
//# sourceMappingURL=TitleCase.js.map