// Compare two arrays and return a new array with any items found
// in only one of the arrays (symmetric difference)

const diffTwoArrays = (x: any[], y: any[]): any[] => {
  const filteredArr1: any[] = x.filter((item) => !y.includes(item));
  const filteredArr2: any[] = y.filter((item) => !x.includes(item));
  return filteredArr1.concat(filteredArr2);
};

module.exports = diffTwoArrays;
