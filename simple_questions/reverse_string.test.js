const { reverseString, revArrow } = require("./reverse_string");

test("Reverse a string using split and join", () => {
  expect(reverseString("javascript")).toBe("tpircsavaj");
});

test("Reverse a string using split and join with arrow function syntax", () => {
  expect(revArrow("javascript")).toBe("tpircsavaj");
});
