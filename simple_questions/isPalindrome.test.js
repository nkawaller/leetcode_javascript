const {
  isPalindrome,
  isPal,
  isPalForOf,
  isPalindromeForEach,
  isPalReduce,
  isPalEvery,
} = require("./isPalindrome");

const str1 = "A man, a plan, a canal: Panama";
const str2 = "Race a car";

test("Check if a string is a palindrome", () => {
  expect(isPalindrome(str1)).toBeTruthy();
});

test("Check if a string is a palindrome", () => {
  expect(isPalindrome(str2)).toBeFalsy();
});

test("Check if a string is a palindrome", () => {
  expect(isPal(str1)).toBeTruthy();
});

test("Check if a string is a palindrome", () => {
  expect(isPal(str2)).toBeFalsy();
});
test("Check if a string is a palindrome", () => {
  expect(isPalForOf(str1)).toBeTruthy();
});

test("Check if a string is a palindrome", () => {
  expect(isPalForOf(str2)).toBeFalsy();
});

test("Check if a string is a palindrome", () => {
  expect(isPalindromeForEach(str1)).toBeTruthy();
});

test("Check if a string is a palindrome", () => {
  expect(isPalindromeForEach(str2)).toBeFalsy();
});
test("Check if a string is a palindrome", () => {
  expect(isPalReduce(str1)).toBeTruthy();
});

test("Check if a string is a palindrome", () => {
  expect(isPalReduce(str2)).toBeFalsy();
});

test("Check if a string is a palindrome", () => {
  expect(isPalEvery(str1)).toBeTruthy();
});

test("Check if a string is a palindrome", () => {
  expect(isPalEvery(str2)).toBeFalsy();
});
