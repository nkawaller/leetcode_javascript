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
module.exports = {
    isPalForEach,
    isPalReduce,
    isPalEvery
};
let aPal = "A man, a plan, a canal: Panama";
let bPal = 'Race a car';
console.log('----For Each----');
console.log(isPalForEach(aPal));
console.log(isPalForEach(bPal));
console.log('----Reduce----');
console.log(isPalReduce(aPal));
console.log(isPalReduce(bPal));
console.log('----Every----');
console.log(isPalEvery(aPal));
console.log(isPalEvery(bPal));
//# sourceMappingURL=isPalindrome.js.map