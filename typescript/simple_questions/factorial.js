/**
 * For Loop
 */
function fact(n) {
    var result = 1;
    for (var i = 1; i < n + 1; i++) {
        result *= i;
    }
    return result;
}
/**
 * For...of
 */
var factForOf = function (arr) {
    var result = 1;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var i = arr_1[_i];
        result *= i;
    }
    return result;
};
/**
 * Recursive
 */
var factRecursive = function (n) {
    if (n == 1) {
        return 1;
    }
    else {
        return n * factRecursive(n - 1);
    }
};
/**
 *  Reduce solution
 */
var factReduce = function (arr) {
    return arr.reduce(function (result, i) { return result * i; });
};
console.log(fact(5));
console.log(fact(7));
console.log(factRecursive(5));
console.log(factRecursive(7));
console.log(factForOf([1, 2, 3, 4, 5]));
console.log(factForOf([1, 2, 3, 4, 5, 6, 7]));
console.log(factReduce([1, 2, 3, 4, 5]));
console.log(factReduce([1, 2, 3, 4, 5, 6, 7]));
