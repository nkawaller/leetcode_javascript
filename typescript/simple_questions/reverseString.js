var reverseString = function (s) {
    return s.split('').reverse().join('');
};
var reverseOneLine = function (s) { return s.split('').reverse().join(''); };
var revForOf = function (s) {
    var result = '';
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var i = s_1[_i];
        result = i + result;
    }
    return result;
};
var reverseStringForOf = function (s) {
    var result = '';
    var charArray = s.split('');
    for (var _i = 0, charArray_1 = charArray; _i < charArray_1.length; _i++) {
        var i = charArray_1[_i];
        result = i + result;
    }
    return result;
};
var a = 'Typescript reverse string';
console.log(reverseString(a));
console.log(reverseOneLine(a));
console.log(reverseStringForOf(a));
console.log(revForOf(a));
