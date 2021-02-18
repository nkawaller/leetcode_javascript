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


let a: string = "A man, a plan, a canal: Panama"
let b: string = 'Race a car'

console.log(isPalForEach(a))
console.log(isPalForEach(b))