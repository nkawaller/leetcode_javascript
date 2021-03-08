const {
  removeFalseOneLine,
  removeFalse,
  removeFalseForOf,
  removeFalseForIn,
} = require("./remove_false_values");

let booleanArray = [true, true, false, true, false];

test("Remove false values from an array", () => {
  expect(removeFalseOneLine(booleanArray)).toStrictEqual([true, true, true]);
});

test("Remove false values from an array", () => {
  expect(removeFalse(booleanArray)).toStrictEqual([true, true, true]);
});

test("Remove false values from an array", () => {
  expect(removeFalseForOf(booleanArray)).toStrictEqual([true, true, true]);
});

test("Remove false values from an array", () => {
  expect(removeFalseForIn(booleanArray)).toStrictEqual([true, true, true]);
});
