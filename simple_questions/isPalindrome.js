// Strip whitespace and non-alphanumeric
const clean = (s) => s.toLowerCase().replace(/[\W_]/g, "");

const isPalindrome = (s) => {
  const cleanString = clean(s);
  return cleanString === cleanString.split("").reverse().join("");
};

const isPal = (s) => {
  const cleanString = clean(s);
  let len = Math.floor(cleanString.length / 2);
  for (let i = 0; i < len; i++) {
    if (cleanString[i] !== cleanString[cleanString.length - i - 1]) {
      return false;
    }
  }
  return true;
};

// For...of
const isPalForOf = (s) => {
  const cleanS = clean(s);
  const charArr = cleanS.split("");

  for (let char of charArr) {
    if (char !== charArr.pop()) {
      return false;
    }
  }
  return true;
};

/**
 * forEach
 */
const isPalindromeForEach = (s) => {
  const cleanS = clean(s);

  let isPal = true;

  cleanS.split("").forEach((char, index) => {
    if (char !== cleanS[cleanS.length - index - 1]) {
      isPal = false;
    }
  });
  return isPal;
};

/**
 * Using reduce()
 */

const isPalReduce = (s) => {
  const cleanS = clean(s);
  return cleanS.split("").reduce((match, c, i) => {
    if (!match) {
      return false;
    }
    return c === cleanS[cleanS.length - 1 - i];
  }, true);
};

/**
 * Using every()
 */

const isPalEvery = (s) => {
  const cleanS = clean(s);
  return cleanS.split("").every((c, i) => c === cleanS[cleanS.length - 1 - i]);
};

module.exports = {
  isPalindrome,
  isPal,
  isPalForOf,
  isPalindromeForEach,
  isPalReduce,
  isPalEvery
}

/**
 * Tests
 */

let a = "race a car";
let b = "A man, a plan, a canal: Panama";

console.log("----Reverse----");
console.log(isPalindrome(a));
console.log(isPalindrome(b));
console.log("----For Loop----");
console.log(isPal(a));
console.log(isPal(b));
console.log("----For Of----");
console.log(isPalForOf(a));
console.log(isPalForOf(b));
console.log("----For Each----");
console.log(isPalindromeForEach(a));
console.log(isPalindromeForEach(b));
console.log("----Reduce----");
console.log(isPalReduce(a));
console.log(isPalReduce(b));
console.log("----Every------");
console.log(isPalEvery(a));
console.log(isPalEvery(b));
