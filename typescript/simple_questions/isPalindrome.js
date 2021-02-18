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
var a = "A man, a plan, a canal: Panama";
var b = 'Race a car';
console.log(isPalForEach(a));
console.log(isPalForEach(b));
