import { expect, test } from "vitest";

function reverse(x) {
  let reversed = "";
  let isNegative = false;

  for (let c of x.toString()) {
    if (c === "-") {
      isNegative = true;
    } else {
      reversed = c.concat(reversed);
    }
  }
  let nReversed = parseInt(reversed);

  let result = isNegative ? nReversed * -1 : nReversed;

  if (result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1) {
    return 0;
  }
  return result;
}

test("ex1", () => {
  expect(reverse(123)).toBe(321);
});

test("ex2", () => {
  expect(reverse(-123)).toBe(-321);
});

test("ex3", () => {
  expect(reverse(120)).toBe(21);
});

test("ex4", () => {
  expect(reverse(1534236469)).toBe(0);
});
