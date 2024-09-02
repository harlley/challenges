import { expect, test } from "vitest";

function A_uniqueOccurrences(arr) {
  return Array.from(new Set(arr)).length !== arr.length;
}

function uniqueOccurrences(arr) {
  const map = new Map();
  for (let n of arr) {
    let aux = map.get(n) || 0;
    map.set(n, ++aux);
  }
  let allValues = Array.from(map.values());
  let uniqueValues = Array.from(new Set(map.values()));
  return allValues.length === uniqueValues.length;
}

test("ex1", () => {
  expect(uniqueOccurrences([1, 2, 2, 1, 1, 3])).toBe(true);
});

test("ex2", () => {
  expect(uniqueOccurrences([1, 2])).toBe(false);
});

test("ex3", () => {
  expect(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])).toBe(true);
});

test("ex4", () => {
  expect(uniqueOccurrences([3, 5, -2, -3, -6, -6])).toBe(false);
});
