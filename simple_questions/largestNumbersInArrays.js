// Return the largest number in each array

const largestNumber = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(Math.max(...arr[i]));
  }
  return result;
};

module.exports = largestNumber;
