import { expect, test } from "vitest";

function matrixReshape(mat, r, c) {
  const m = mat.length;
  const n = mat[0].length;

  // Check if reshaping is possible
  if (m * n !== r * c) {
    return mat;
  }

  // Flatten the original matrix into a 1D array
  const flatList = mat.flat();

  // Create the reshaped matrix
  const newMatrix = [];
  for (let i = 0; i < r; i++) {
    const newRow = [];
    for (let j = 0; j < c; j++) {
      newRow.push(flatList[i * c + j]);
    }
    newMatrix.push(newRow);
  }

  return newMatrix;
}

test("ex1", () => {
  expect(
    matrixReshape(
      [
        [1, 2],
        [3, 4],
      ],
      1,
      4
    )
  ).toStrictEqual([[1, 2, 3, 4]]);
});

test("ex2", () => {
  expect(
    matrixReshape(
      [
        [1, 2],
        [3, 4],
      ],
      2,
      4
    )
  ).toStrictEqual([
    [1, 2],
    [3, 4],
  ]);
});
