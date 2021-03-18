"use strict";
const lowestIndex = require('./lowestIndex');
let arrayWithoutVal = [1, 2, 3, 5, 6, 7, 8, 9];
let insertedValue = 4;
test('Find the lowest index of an inserted value', () => {
    expect(lowestIndex(arrayWithoutVal, insertedValue)).toBe(3);
});
module.exports = {};
//# sourceMappingURL=lowestIndex.test.js.map