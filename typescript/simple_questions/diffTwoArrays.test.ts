export = {}
const diffTwoArrays = require('./diffTwoArrays')

let arr1: number[] = [1, 2, 3, 4, 5];
let arr2: number[] = [4, 5, 6];
let stringArr1: string[] = ["cat", "dog", "bird", "fish"];
let stringArr2: string[] = ["bird", "fish", "pig", "horse"];

test('Find the symmetric difference between two arrays', () => {
    expect(diffTwoArrays(arr1, arr2)).toStrictEqual([1,2,3,6]);
})