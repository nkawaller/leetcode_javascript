// Truncate a string to a specified length

const truncate = (str: string, len: number): string => {
  if (str.length < len) {
    return str;
  }
  return `${str.slice(0, len)}...`;
};

module.exports = truncate;
