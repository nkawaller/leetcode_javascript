// Remove all false values from an array

// Filter method
const removeFalseOneLine = (arr) => arr.filter(Boolean)


// For loop
const removeFalse = (arr) => {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            result.push(arr[i])
        }
    }
    return result
}

// For...of
// For loops return indexes, for...of loops return the actual element
const removeFalseForOf = (arr) => {
    let result = []
    for (i of arr) {
        if (i) {
            result.push(i)
        }
    }
    return result
}


a = [true, true, true, false, false]

console.log(removeFalseOneLine(a))
console.log(removeFalse(a))
console.log(removeFalseForOf(a))