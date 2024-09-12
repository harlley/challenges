import { test, expect } from "vitest";

function longestPalindrome(s) {
  function isPalindrome(s) {
    let reversed = s.split("").reverse().join("");
    return reversed === s;
  }
  let longest = "";
  for (let i = 0; i < s.length; i++) {
    if (isPalindrome(longest)) return longest;
    longest += s[i];
  }

  return longest;
}

test("longestPalindrome", () => {
  expect(longestPalindrome("bab")).toBe("bab");
  expect(longestPalindrome("babad")).toBe("bab");
  expect(longestPalindrome("cbbd")).toBe("bb");
});

// console.log(longestPalindrome("babad"));
