export = {}

const { fact, factForOf, factReduce, factRecursive } = require('./factorial')

test('Find the factorial of a given number', () => {
    expect(fact(5)).toBe(120);
})