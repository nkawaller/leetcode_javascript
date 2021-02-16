const reverseString = (s: string): string => {
    return s.split('').reverse().join('')
}

let a = 'Typescript reverse string'
console.log(reverseString(a))