function lengthOfLongestSubstring(s) {
  if (s.length <= 1) return s.length;

  let lookup = new Map();
  let len = s.length;
  let max = 0;
  let start = 0;

  for (let i = 0; i < len; i++) {
    let c = s.charAt(i);

    if (lookup.has(c) && lookup.get(c) >= start) {
      start = lookup.get(c) + 1;
    }

    lookup.set(c, i);

    max = Math.max(max, i - start + 1);
  }

  return max;
}
