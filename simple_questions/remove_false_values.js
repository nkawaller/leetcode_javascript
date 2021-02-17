// Remove all false values from an array

const removeFalse = (arr) => {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            result.push(arr[i])
        }
    }
    return result
}


a = [true, true, true, false, false]

console.log(removeFalse(a))