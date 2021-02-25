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
let lowerSentence = "title case a sentence in javascript";
console.log(TitleCase(lowerSentence));
//# sourceMappingURL=TitleCase.js.map