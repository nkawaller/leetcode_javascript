/**
 * For loop
 */
const fact = (n) => {
  let result = 1;
  for (let i = 1; i < n + 1; i++) {
    result *= i;
  }
  return result;
};

/**
 * For...of
 */
const factForOf = (n) => {
  let result = 1;
  for (i of n) {
    result *= i;
  }
  return result;
};

/**
 * Recursive
 */
const recursiveFact = (n) => {
  if (n === 1) {
    return 1;
  } else {
    return n * recursiveFact(n - 1);
  }
};

/**
 *  Using reduce
 */
const factReduce = (arr) => {
  return arr.reduce((result, i) => result * i);
};

module.exports = {
  fact,
  factForOf,
  recursiveFact,
  factReduce,
};
