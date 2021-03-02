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
