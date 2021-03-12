export = {};
const sliceAndSplice = require("./sliceAndSplice");

let firstArray: number[] = [1, 5];
let secondArray: number[] = [2, 3, 4];

test("Insert one array into another at a given index", () => {
    expect(sliceAndSplice(firstArray, secondArray, 1)).toEqual([1,2,3,4,5])
});
