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

test('Find the factorial of a given number', () => {
    expect(factReduce([1,2,3,4,5])).toBe(120);
})

test('Find the factorial of a given number', () => {
    expect(factReduce([1,2,3,4,5,6,7])).toBe(5040);
})

test('Find the factorial of a given number', () => {
    expect(factForOf([1,2,3,4,5])).toBe(120);
})

test('Find the factorial of a given number', () => {
    expect(factForOf([1,2,3,4,5,6,7])).toBe(5040);
})