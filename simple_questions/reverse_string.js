// Traditional way
function reverseString(s) {
    return s.split('').reverse().join('')
}


// Arrow function
let revArrow = (s) => s.split('').reverse().join('')


// Decrementing for loop
function decRev(s) {
    let result = '';
    for (let i = s.length - 1; i >= 0; i-- ) {
        result += s[i];
    }
    return result;
}


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


function revWhile(s) {
    let result = '';
    let count = s.length - 1;
    while (count >= 0) {
        result += s[count]; 
        count --;
    }
    return result
}


a = 'Reversing a string in JavaScript'

console.log(reverseString(a));
console.log(revArrow(a));
console.log(revForOf(a));
console.log(revForIn(a));
console.log(revWhile(a));
console.log(decRev(a));