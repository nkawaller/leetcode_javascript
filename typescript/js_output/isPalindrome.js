"use strict";
const isPalForEach = (s) => {
    const cleanS = s.toLowerCase().replace(/[\W_]/g, '');
    let isPal = true;
    cleanS.split('').forEach((c, i) => {
        if (c !== cleanS[cleanS.length - i - 1]) {
            isPal = false;
        }
    });
    return isPal;
};
const isPalReduce = (s) => {
    const cleanS = s.toLowerCase().replace(/[\W_]/g, '');
    return cleanS.split('').reduceRight((match, c, i) => {
        if (!match) {
            return false;
        }
        return c === cleanS[cleanS.length - 1 - i];
    }, true);
};
const isPalEvery = (s) => {
    const cleanS = s.toLowerCase().replace(/[\W_]/g, '');
    return cleanS.split('').every((c, i) => c === cleanS[cleanS.length - 1 - i]);
};
let a = "A man, a plan, a canal: Panama";
let b = 'Race a car';
console.log('----For Each----');
console.log(isPalForEach(a));
console.log(isPalForEach(b));
console.log('----Reduce----');
console.log(isPalReduce(a));
console.log(isPalReduce(b));
console.log('----Every----');
console.log(isPalEvery(a));
console.log(isPalEvery(b));
//# sourceMappingURL=isPalindrome.js.map