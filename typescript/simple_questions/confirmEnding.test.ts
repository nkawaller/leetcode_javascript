export = {};

const { confirmEndingOneLine, confirmEndingSlice } = require("./confirmEnding");

let confirmStr1: string = "Learning Typescript";
let confirmStr2: string = "script";
let confirmStr3: string = "Learning";

test("Determine whether two string have the same ending", () => {
  expect(confirmEndingOneLine(confirmStr1, confirmStr2)).toBeTruthy;
});

test("Determine whether two string have the same ending", () => {
  expect(confirmEndingOneLine(confirmStr1, confirmStr3)).toBeTruthy;
});

test("Determine whether two string have the same ending", () => {
  expect(confirmEndingSlice(confirmStr1, confirmStr2)).toBeTruthy;
});

test("Determine whether two string have the same ending", () => {
  expect(confirmEndingSlice(confirmStr1, confirmStr3)).toBeTruthy;
});
