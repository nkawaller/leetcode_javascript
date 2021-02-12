// Traditional way

function reverseString(s) {
    return s.split('').reverse().join('')
}

// Arrow function

let revArrow = (s) => s.split('').reverse().join('')




a = 'Reversing a string in JavaScript'

console.log(reverseString(a));
console.log(revArrow(a));