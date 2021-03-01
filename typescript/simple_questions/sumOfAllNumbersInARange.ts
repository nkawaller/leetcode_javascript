// Given an array of two numbers, find the sum of those two 
// numbers, plus all the numbers in between. The smallest 
// number won't always come first.

// sort the numbers... set?
// for loop from a - b summing them

const sumOfRange = (arr: number[]): number => {
    let result: number = 0
    arr = arr.sort()
    for (let i = arr[0]; i <= arr[1]; i++) {
        result += i
    }
    return result

}