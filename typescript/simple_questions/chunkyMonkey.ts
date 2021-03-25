// Split an array into groups of a specified size

const chunkyMonkey = (arr: number[], size: number): number[] => {
  const result: any[] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

module.exports = chunkyMonkey;
