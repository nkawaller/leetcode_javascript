const { fact, factForOf, recursiveFact, factReduce } = require("./factorial");

test("find the factorial of a number", () => {
  expect(fact(5)).toBe(120);
});

test("find the factorial of a number", () => {
  expect(fact(7)).toBe(5040);
});

test("find factorial using for...Of", () => {
  expect(factForOf([1, 2, 3, 4, 5])).toBe(120);
});

test("find factorial using for...Of", () => {
  expect(factForOf([1, 2, 3, 4, 5, 6, 7])).toEqual(5040);
});

test("find factorial recursively", () => {
  expect(recursiveFact(5)).toEqual(120);
});

test("find factorial recursively", () => {
  expect(recursiveFact(7)).toEqual(5040);
});

test("find factorial using reduce", () => {
  expect(factReduce([1, 2, 3, 4, 5])).toEqual(120);
});

test("find factorial using reduce", () => {
  expect(factReduce([1, 2, 3, 4, 5, 6, 7])).toBe(5040);
});
