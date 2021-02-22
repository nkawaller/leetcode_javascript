// Given a string, and a number, return the string repeated that number of times



const repeatStringOneLine = (s: string, n: number): string => s.repeat(n)


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


let a: string = 'Repeating strings'

console.log(repeatStringOneLine(a, 7));
console.log(repeatString(a, 7));
