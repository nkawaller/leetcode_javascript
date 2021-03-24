// Return true if two strings have the same ending

const confirmEndingOneLine = (str1: string, str2: string): boolean => {
  return str1.endsWith(str2);
};

const confirmEndingSlice = (str1: string, str2: string): boolean => {
  return str1.slice(-str2.length) === str2;
};

module.exports = { confirmEndingOneLine, confirmEndingSlice };
