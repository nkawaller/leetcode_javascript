const {
  reverseString,
  revArrow,
  decRev,
  revForOf,
  revForIn,
  revWhile,
} = require("./reverse_string");

test("Reverse a string using split and join", () => {
  expect(reverseString("javascript")).toBe("tpircsavaj");
});

test("Reverse a string using split and join with arrow function syntax", () => {
  expect(revArrow("javascript")).toBe("tpircsavaj");
});

test("Reverse string with decrementing for loop", () => {
  expect(decRev("hello")).toBe("olleh");
});

test("Reverse string with for...of loop", () => {
  expect(revForOf("hello")).toBe("olleh");
});

test("Reverse string with for...in loop", () => {
  expect(revForIn("hello")).toBe("olleh");
});

test("Reverse string using a while loop", () => {
  expect(revWhile("hello")).toBe("olleh");
});
