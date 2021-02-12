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


// For in loop
function revForIn(s) {
    let result = '';
    for (i in s) {
        result = s[i] + result;
    }
    return result;
}





a = 'Reversing a string in JavaScript'

console.log(reverseString(a));
console.log(revArrow(a));
console.log(revForOf(a));
console.log(revForIn(a));