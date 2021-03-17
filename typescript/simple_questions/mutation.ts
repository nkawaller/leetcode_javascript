// Return true if the first element of the array contains all the 
// letters of the second element of the array


const mutation = (arr: string[]): boolean => {
    const target = arr[0].toLowerCase();
    const test = arr[1].toLowerCase();
    for (let i = 0; i < test.length; i++) {
        if (target.indexOf(test[i]) < 0) {
            return false
        }
    }
    return true
}

module.exports = mutation;



let testArrFalse = ['plan', 'planet']
let testArrTrue = ['planet', 'plan']

console.log(mutation(testArrFalse))
console.log(mutation(testArrTrue))