// Split an array into groups of a specified size

const chunkyMonkey = (arr: number[], size: number): number[] => {
    const result: number[] = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result
}


let fullArray: number[] = [1,2,3,4,5,6,7,8,9]
console.log(chunkyMonkey(fullArray, 3));