const longestPalindrome = (str) => {
  if (str === undefined || str === null || str.length < 1) {
    return "";
  }

  let start = 0;
  let maxLen = 0;

  for (let i = 0; i < str.length; i++) {
    let len1 = slidingWindow(str, i, i);
    let len2 = slidingWindow(str, i, i + 1);
    let len = Math.max(len1, len2);

    if (len > maxLen) {
      maxLen = len;
      start = i - Math.floor((len - 1) / 2);
    }
  }
  return str.substr(start, maxLen);
};

const slidingWindow = (str, left, right) => {
  while (
    left >= 0 &&
    right < str.length &&
    str.charAt(left) === str.charAt(right)
  ) {
    left--;
    right++;
  }
  return right - left - 1;
};
