// Check if a value is a boolean

const booWho = (bool: boolean): boolean => {
  return typeof bool === "boolean";
};

/**
 * Tests
 */

let boolCheckTrue = true;
let boolCheckFalse = "hello";

console.log(booWho(boolCheckTrue));
console.log(booWho(boolCheckFalse));