// Return the lowest index at which a value should be inserted
// into an array

const lowestIndex = (arr: number[], val: number): number => {
  arr.push(val);
  arr.sort();
  return arr.indexOf(val);
};

module.exports = lowestIndex;
