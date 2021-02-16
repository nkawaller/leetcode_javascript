// Traditional function
function fact(n) {
    var result = 1;
    for (var i = 1; i < n + 1; i++) {
        result *= i;
    }
    return result;
}
// Arrow function recursive
var factRecursive = function (n) {
    if (n == 1) {
        return 1;
    }
    else {
        return n * factRecursive(n - 1);
    }
};
console.log(fact(5));
console.log(fact(7));
console.log(factRecursive(5));
console.log(factRecursive(7));
