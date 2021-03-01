// Given an array of two numbers, find the sum of those two 
// numbers, plus all the numbers in between. The smallest 
// number won't always come first.


const sumOfRange = (arr: number[]): number => {
    let result: number = 0
    arr = arr.sort()
    for (let i = arr[0]; i <= arr[1]; i++) {
        result += i
    }
    return result

}

/**
 * Tests
 */

let arrOfTwoNumbers = [1,3]
let unsortedArrofTwoNumbers = [3,1]
console.log(sumOfRange(arrOfTwoNumbers));
console.log(sumOfRange(unsortedArrofTwoNumbers));