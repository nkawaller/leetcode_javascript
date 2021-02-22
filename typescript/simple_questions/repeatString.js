// Given a string, and a number, return the string repeated that number of times
var s = 'Repeating strings';
var repeatString = function (s, n) {
    var result = '';
    for (var i = 0; i < n; i++) {
        result += s;
    }
    return result;
};
console.log(repeatString(s, 7));
