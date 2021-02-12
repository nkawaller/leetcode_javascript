// Traditional way

function reverseString(s) {
    return s.split('').reverse().join('')
}

// Arrow function

let revArrow = (s) => s.split('').reverse().join('')

// For of loop
function revForOf(s) {
    let result = '';
    for (i of s) {
        result = i + result
    }
    return result
}




a = 'Reversing a string in JavaScript'

console.log(reverseString(a));
console.log(revArrow(a));
console.log(rev2(a));