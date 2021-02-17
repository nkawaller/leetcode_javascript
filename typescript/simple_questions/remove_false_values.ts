// Remove false values from an array


// One liner
const removeFalse = (arr: boolean[]): boolean[] => arr.filter(Boolean)












let a: boolean[] = [true, true, false, true, false]

console.log(removeFalse(a))