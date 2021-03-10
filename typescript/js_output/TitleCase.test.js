"use strict";
const TitleCase = require('./TitleCase');
let lowerSentence = "title case a sentence in typescript";
test('Title-case a sentence', () => {
    expect(TitleCase(lowerSentence)).toMatch('Title Case A Sentence In Typescript');
});
module.exports = {};
//# sourceMappingURL=TitleCase.test.js.map