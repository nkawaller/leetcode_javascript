const reverseString = (s: string): string => {
  return s.split("").reverse().join("");
};

const reverseOneLine = (s: string): string => s.split("").reverse().join("");

const reverseStringForOf = (s: string): string => {
  let result: string = "";
  let charArray: string[] = s.split("");
  for (let i of charArray) {
    result = i + result;
  }
  return result;
};

module.exports = {
  reverseString,
  reverseOneLine,
  reverseStringForOf,
};
