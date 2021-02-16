function fact(n) {
    var result = 1;
    for (var i = 1; i < n + 1; i++) {
        result *= i;
    }
    return result;
}
console.log(fact(5));
console.log(fact(7));
