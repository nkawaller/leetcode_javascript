const repeatString = require("./repeatString");

test("Repeat a string a given number of times", () => {
  expect(repeatString("test", 7)).toBe("testtesttesttesttesttesttest");
});
