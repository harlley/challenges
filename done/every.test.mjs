import { expect, test } from "vitest";

function every(array, test) {
  if (array.length === 0) return false;
  let found = [];
  for (let item of array) {
    if (test(item)) {
      found.push(item);
    }
  }
  return found.length == array.length;
}

test("ex1", () => {
  expect(every([1, 3, 5], (n) => n < 10)).toBe(true);
});

test("ex2", () => {
  expect(every([2, 4, 16], (n) => n < 10)).toBe(false);
});

test("ex3", () => {
  expect(every([], (n) => n < 10)).toBe(false);
});

test("ex4", () => {
  expect(every([16], (n) => n > 10)).toBe(true);
});
