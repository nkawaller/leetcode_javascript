// Remove false values from an array
// One liner
var removeFalseOne = function (arr) { return arr.filter(Boolean); };
// For loop
var removeFalse = function (arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i]) {
            result.push(arr[i]);
        }
    }
    return result;
};
var a = [true, true, false, true, false];
console.log(removeFalseOne(a));
console.log(removeFalse(a));
