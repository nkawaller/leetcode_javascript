// Strip whitespace and non-alphanumeric
// const clean: string = (s: string) => s.toLowerCase().replace(/[\W_]/g, '');


/**
 * forEach
 */

const isPalForEach = (s: string): boolean => {
    const cleanS: string = s.toLowerCase().replace(/[\W_]/g, '');
    let isPal: boolean = true;
    cleanS.split('').forEach((c, i) => {
        if (c !== cleanS[cleanS.length -i - 1]) {
            isPal = false;
        }
    })
    return isPal
}


/**
 * Using reduce()
 */

const isPalReduce = (s: string) => {
    const cleanS: string = s.toLowerCase().replace(/[\W_]/g, '');
    return cleanS.split('').reduceRight((match, c,i) => {
        if (!match) {
            return false;
        }
        return c === cleanS[cleanS.length-1-i];
    }, true);
}


/**
 * Using every()
 */

const isPalEvery = (s: string): boolean => {
    const cleanS: string = s.toLowerCase().replace(/[\W_]/g, '');
    return cleanS.split('').every((c,i) => c === cleanS[cleanS.length - 1 - i])
}



let a: string = "A man, a plan, a canal: Panama"
let b: string = 'Race a car'


console.log(isPalForEach(a))
console.log(isPalForEach(b))
console.log(isPalReduce(a));
console.log(isPalReduce(b));
console.log(isPalEvery(a));
console.log(isPalEvery(b));