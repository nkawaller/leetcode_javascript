// Truncate a string to a specified length

const truncate = (str: string, len: number): string => {
  if (str.length < len) {
    return str;
  }
  return `${str.slice(0, len)}...`;
};

/**
 * Tests
 */

let fullLengthString: string = "This is the string we want to truncate";

console.log(truncate(fullLengthString, 15));
console.log(truncate(fullLengthString, 45));
