export = {};
const mutation = require("./mutation");

let testArrFalse = ["plan", "planet"];
let testArrTrue = ["planet", "plan"];

test("Does the first element in the array contain all the letters in the second element", () => {
  expect(mutation(testArrFalse)).toBeFalsy();
});

test("Does the first element in the array contain all the letters in the second element", () => {
  expect(mutation(testArrTrue)).toBeTruthy();
});
