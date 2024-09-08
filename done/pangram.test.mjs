import { expect, test } from "vitest";

// function checkIfPangram(sentence) {
//   const map = new Map();
//   const alphabet = "abcdefghijlmnopqrstuvxzkwy";
//   for (let char of sentence) {
//     let aux = map.get(char) || 0;
//     map.set(char, ++aux);
//   }

//   for (let char of alphabet) {
//     if (!map.get(char) > 0) return false;
//   }
//   return true;
// }

// function checkIfPangram(sentence) {
//   return new Set([...sentence]).size === 26;
// }

function checkIfPangram(sentence) {
  const map = new Map();
  const ALPHABET_SIZE = 26;
  const alphabet = Array.from({ length: ALPHABET_SIZE }, (_, i) =>
    String.fromCharCode("a".charCodeAt(0) + i)
  );
  for (let char of sentence) {
    let aux = map.get(char) || 0;
    map.set(char, ++aux);
  }

  for (let char of alphabet) {
    if (!map.get(char) > 0) return false;
  }
  return true;
}

test("ex1", () => {
  expect(checkIfPangram("thequickbrownfoxjumpsoverthelazydog")).toBe(true);
});

test("ex2", () => {
  expect(checkIfPangram("leetcode")).toBe(false);
});
