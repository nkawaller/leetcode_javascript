// Given a string, and a number, return the string repeated that number of times
// const repeatStringOneLine = (s: string, n: number): string => s.repeat(n)
/**
 * For loop
 */
var repeatString = function (s, n) {
    var result = '';
    for (var i = 0; i < n; i++) {
        result += s;
    }
    return result;
};
/**
 * While loop
 */
var repeatStringWhile = function (s, n) {
    var result = '';
    while (n > 0) {
        result += s;
        n--;
    }
    return result;
};
var a = 'Repeating strings';
// console.log(repeatStringOneLine(a, 7));
console.log(repeatString(a, 7));
console.log(repeatStringWhile(a, 3));
