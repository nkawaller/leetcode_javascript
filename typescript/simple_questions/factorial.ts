/**
 * For Loop
 */
function fact(n: number): number {
  let result = 1;
  for (let i = 1; i < n + 1; i++) {
    result *= i;
  }
  return result;
}

/**
 * For...of
 */
const factForOf = (arr: number[]): number => {
  let result: number = 1;
  for (let i of arr) {
    result *= i;
  }
  return result;
};

/**
 * Recursive
 */
const factRecursive = (n: number): number => {
  if (n == 1) {
    return 1;
  } else {
    return n * factRecursive(n - 1);
  }
};

/**
 *  Reduce solution
 */
const factReduce = (arr: number[]): number => {
  return arr.reduce((result, i) => result * i);
};

module.exports = { fact, factForOf, factRecursive, factReduce };
