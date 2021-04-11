function longestPalindrome(s) {
  var longest = "",
    c;
  for (c = 0; c < s.length; c++) {
    if ((s.length - c) * 2 <= longest.length) break;

    longest = scanOutward(s, longest, c, c);
    longest = scanOutward(s, longest, c + 1, c);
  }
  return longest;
}

function scanOutward(s, longest, left, right) {
  if (left > 0 && right < s.length && s[left - 1] === s[right + 1]) {
    return scanOutward(s, longest, left - 1, right + 1);
  } else {
    return right - left + 1 >= longest.length
      ? s.substring(left, right + 1)
      : longest;
  }
}

const longestPalindromicSubstring = (str) => {
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
