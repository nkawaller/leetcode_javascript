let a = [[1,2,3], [1,2,3], [1,2,3]]

const largest = arr => {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(Math.max(...arr[i]))
    }
    return result
}

console.log(largest(a));