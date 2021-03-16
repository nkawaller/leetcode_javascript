// Remove false values from an array

// One liner
const removeFalseOne = (arr: boolean[]): boolean[] => arr.filter(Boolean);

// For loop
const removeFalse = (arr: boolean[]): boolean[] => {
  let result: boolean[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      result.push(arr[i]);
    }
  }
  return result;
};

// For...of
const removeFalseForOf = (arr: boolean[]): boolean[] => {
  let result: boolean[] = [];
  for (let i of arr) {
    if (i) {
      result.push(i);
    }
  }
  return result;
};

// For...in
const removeFalseForIn = (arr: boolean[]): boolean[] => {
  let result: boolean[] = [];
  for (let i in arr) {
    if (arr[i]) {
      result.push(arr[i]);
    }
  }
  return result;
};

module.exports = {
  removeFalseOne,
  removeFalse,
  removeFalseForIn,
  removeFalseForOf,
};
