export = {};

const { isPalForEach, isPalEvery, isPalReduce } = require("./isPalindrome");

let aPal: string = "A man, a plan, a canal: Panama";
let bPal: string = "Race a car";

test("Determine whether a string is a palindrome", () => {
  expect(isPalForEach(aPal)).toBeTruthy;
});

test("Determine whether a string is a palindrome", () => {
  expect(isPalForEach(bPal)).toBeFalsy;
});

test("Determine whether a string is a palindrome", () => {
  expect(isPalEvery(aPal)).toBeTruthy;
});

test("Determine whether a string is a palindrome", () => {
  expect(isPalEvery(bPal)).toBeFalsy;
});

test("Determine whether a string is a palindrome", () => {
  expect(isPalReduce(aPal)).toBeTruthy;
});

test("Determine whether a string is a palindrome", () => {
  expect(isPalReduce(bPal)).toBeFalsy;
});