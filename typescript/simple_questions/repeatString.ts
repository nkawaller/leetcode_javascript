// Given a string, and a number, return the string repeated that number of times

let s: string = 'Repeating strings'

const repeatString = (s: string, n: number): string => {
    let result: string = ''
    for (let i = 0; i < n; i ++) {
        result += s
    }
    return result

} 


console.log(repeatString(s, 7));