// Remove false values from an array


// One liner
const removeFalseOne = (arr: boolean[]): boolean[] => arr.filter(Boolean)


// For loop
const removeFalse = (arr: boolean[]): boolean[] => {
    let result: boolean[] = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            result.push(arr[i])
        }
    }
    return result

}












let a: boolean[] = [true, true, false, true, false]

console.log(removeFalseOne(a))
console.log(removeFalse(a))