// Remove all false values from an array

// Filter method
const removeFalseOneLine = (arr) => arr.filter(Boolean);

// For loop
const removeFalse = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      result.push(arr[i]);
    }
  }
  return result;
};

// For...of
// For loops return indexes, for...of loops return the actual element
const removeFalseForOf = (arr) => {
  let result = [];
  for (i of arr) {
    if (i) {
      result.push(i);
    }
  }
  return result;
};

// For...in
// For...in returns the index
const removeFalseForIn = (arr) => {
  let result = [];
  for (i in arr) {
    if (arr[i]) {
      result.push(arr[i]);
    }
  }
  return result;
};

// Tests

let a = [true, true, false, true, false];

console.log(removeFalseOneLine(a));
console.log(removeFalse(a));
console.log(removeFalseForOf(a));
console.log(removeFalseForIn(a));
