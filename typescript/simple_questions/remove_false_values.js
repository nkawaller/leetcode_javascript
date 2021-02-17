// Remove false values from an array
// One liner
var removeFalse = function (arr) { return arr.filter(Boolean); };
var a = [true, true, false, true, false];
console.log(removeFalse(a));
