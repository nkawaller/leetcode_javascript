// Given a string, and a number, return the string repeated that number of times



// const repeatStringOneLine = (s: string, n: number): string => s.repeat(n)


/**
 * For loop
 */

const repeatString = (s: string, n: number): string => {
    let result: string = ''
    for (let i = 0; i < n; i ++) {
        result += s
    }
    return result

} 


/**
 * While loop
 */

 const repeatStringWhile = (s: string, n: number): string => {
     let result: string = ''
     while (n > 0) {
         result += s
         n --;
     }
     return result
 }


 /**
  * Recursive solution
  */

const repeatStringRecursive = (s: string, n: number): string => {
    if (n === 1) {
        return s
    } else {
        return s + repeatStringRecursive(s, n-1)
    }
}


/**
 * Tests
 */

let a: string = 'Repeating strings'

// console.log(repeatStringOneLine(a, 7));
console.log(repeatString(a, 7));
console.log(repeatStringWhile(a, 3))
console.log(repeatStringRecursive(a, 5))