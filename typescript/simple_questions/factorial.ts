// Traditional function
function fact(n: number): number {
    let result = 1
    for (let i = 1; i < n+1; i++) {
        result *= i
    }
    return result
}

// Arrow function recursive
const factRecursive = (n: number): number => {
    if (n == 1) {
        return 1
    } else { 
        return n * factRecursive(n - 1)
    }
}




console.log(fact(5))
console.log(fact(7))
console.log(factRecursive(5))
console.log(factRecursive(7))



