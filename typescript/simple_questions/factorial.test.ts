export = {}

const { fact, factForOf, factReduce, factRecursive } = require('./factorial')

test('Find the factorial of a given number', () => {
    expect(fact(5)).toBe(120);
})

test('Find the factorial of a given number', () => {
    expect(fact(7)).toBe(5040);
})

test('Find the factorial of a given number', () => {
    expect(factRecursive(5)).toBe(120);
})

test('Find the factorial of a given number', () => {
    expect(factRecursive(7)).toBe(5040);
})