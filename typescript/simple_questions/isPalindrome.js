// Strip whitespace and non-alphanumeric
// const clean: string = (s: string) => s.toLowerCase().replace(/[\W_]/g, '');
/**
 * forEach
 */
var isPalForEach = function (s) {
    var cleanS = s.toLowerCase().replace(/[\W_]/g, '');
    var isPal = true;
    cleanS.split('').forEach(function (c, i) {
        if (c !== cleanS[cleanS.length - i - 1]) {
            isPal = false;
        }
    });
    return isPal;
};
/**
 * Using reduce()
 */
var isPalReduce = function (s) {
    var cleanS = s.toLowerCase().replace(/[\W_]/g, '');
    return cleanS.split('').reduceRight(function (match, c, i) {
        if (!match) {
            return false;
        }
        return c === cleanS[cleanS.length - 1 - i];
    }, true);
};
var a = "A man, a plan, a canal: Panama";
var b = 'Race a car';
console.log(isPalForEach(a));
console.log(isPalForEach(b));
console.log(isPalReduce(a));
console.log(isPalReduce(b));
