import { expect, test } from "vitest";

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

test("ex1", () => {
  expect(twoSum([3, 2, 4], 6)).toStrictEqual([1, 2]);
});

test("ex2", () => {
  expect(twoSum([3, 3], 6)).toStrictEqual([0, 1]);
});

test("ex3", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
});
