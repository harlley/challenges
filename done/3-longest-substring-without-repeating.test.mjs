import { test, expect } from "vitest";

// function lengthOfLongestSubstring(s) {
//   let acc = "";
//   let max = 0;
//   for (let c of s) {
//     if (acc.includes(c)) {
//       acc = acc.slice(acc.indexOf(c), -1);
//     }
//     acc += c;
//     max = Math.max(max, acc.length);
//   }
//   return max;
// }

function _lengthOfLongestSubstring(s) {
  let set = new Set();
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(set.keys().next().value);
    }
    set.add(s[i]);
    max = Math.max(max, set.size);
  }

  return max;
}

test("lengthOfLongestSubstring", () => {
  expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
  expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
  expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
  expect(lengthOfLongestSubstring("")).toBe(0);
  expect(lengthOfLongestSubstring(" ")).toBe(1);
  expect(lengthOfLongestSubstring("au")).toBe(2);
  expect(lengthOfLongestSubstring("dvdf")).toBe(3);
  expect(lengthOfLongestSubstring("abba")).toBe(2);
  expect(lengthOfLongestSubstring("aab")).toBe(2);
  expect(lengthOfLongestSubstring("tmmzuxt")).toBe(5);
  expect(lengthOfLongestSubstring("tmmzuxt")).toBe(5);
  expect(lengthOfLongestSubstring("aabaab!bb")).toBe(4);
});
