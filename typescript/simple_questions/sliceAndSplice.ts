// Insert one array into another at a given index

const sliceAndSplice = (
  arr1: number[],
  arr2: number[],
  val: number
): number[] => {
  let newArr: number[] = [...arr1];
  newArr.splice(val, 0, ...arr2);
  return newArr;
};

module.exports = sliceAndSplice;
