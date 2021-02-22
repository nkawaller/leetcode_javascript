// Given a string, and a number, return the string repeated that number of times
var repeatStringOneLine = function (s, n) { return s.repeat(n); };
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
var a = 'Repeating strings';
console.log(repeatStringOneLine(a, 7));
console.log(repeatString(a, 7));
