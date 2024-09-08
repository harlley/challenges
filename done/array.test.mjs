import { expect, test } from "vitest";

function merge(arr1, arr2) {
  return arr1.concat(arr2);
}

test("merge", () => {
  const result = merge([1, 2, 3], [4, 5, 6]);
  expect(result).toStrictEqual([1, 2, 3, 4, 5, 6]);
});
