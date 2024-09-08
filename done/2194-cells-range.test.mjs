import { expect, test } from "vitest";

function cellsInRange(s) {
  let [start, end] = s.split(":");
  let range = [];
  for (let i = start[0].charCodeAt(0); i <= end[0].charCodeAt(0); i++) {
    for (let j = parseInt(start[1]); j <= parseInt(end[1]); j++) {
      range.push(String.fromCharCode(i) + j);
    }
  }
  return range;
}

test("ex1", () => {
  expect(cellsInRange("K1:L2")).toStrictEqual(["K1", "K2", "L1", "L2"]);
});

test("ex2", () => {
  expect(cellsInRange("A1:F1")).toStrictEqual([
    "A1",
    "B1",
    "C1",
    "D1",
    "E1",
    "F1",
  ]);
});
