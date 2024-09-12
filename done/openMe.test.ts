import { test, expect } from "vitest";

/*
1. Input: “cat”, “car”, “bar”
2. `function setup(input)` → will be called `setup(["cat", "car", "bar"])`
3. `function isInDict(word)` → returns true if word is in dict
4. Goal is to make `isInDict` as optimized as possible (you can use `setup` to prepare)
*/
let globalArr: string[] = [];

function setup(arr: string[]) {
  //   globalArr = arr // ["cat", "*at", "c*t", "ca*", ...];
  for (let word of arr) {
    let newWord = "";
    for (let i = -1; i < word.length; i++) {
      newWord = word.replace(word[i], "*");
      globalArr.push(newWord);
    }
  }
}

function isInDict(word: string): boolean {
  return globalArr.some((w) => w === word);
}

setup(["cat", "car", "bar"]);

test("cisInDictat", () => {
  expect(isInDict("cat")).toBe(true);
  expect(isInDict("dog")).toBe(false);
  expect(isInDict("c*t")).toBe(true);
  expect(isInDict("d*g")).toBe(false);
});
