function fact(n: number): number {
    let result = 1
    for (let i = 1; i < n+1; i++) {
        result *= i
    }
    return result
}


console.log(fact(5))
console.log(fact(7))



