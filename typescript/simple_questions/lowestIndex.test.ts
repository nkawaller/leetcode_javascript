export = {}
const lowestIndex = require('./lowestIndex')

let arrayWithoutVal: number[] = [1, 2, 3, 5, 6, 7, 8, 9];
let insertedValue: number = 4;

test('Find the lowest index of an inserted value', () => {
    expect(lowestIndex(arrayWithoutVal, insertedValue)).toBe(3)   
})