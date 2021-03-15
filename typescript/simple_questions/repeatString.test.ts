export = {}
const {
    repeatString,
    repeatStringOneLine,
    repeatStringWhile,
    repeatStringRecursive
} = require('./repeatString')

test('Repeat a string a given amount of times', () => {
    expect(repeatStringOneLine('test', 3)).toBe('testtesttest');
})