import { expect, test } from "vitest";

function StringChallenge(str) {
  const allowedTags = new Set(["b", "i", "em", "div", "p"]);
  const stack = [];

  let i = 0;
  const n = str.length;

  while (i < n) {
    if (str[i] === "<") {
      let j = i;
      while (j < n && str[j] !== ">") j++;
      if (j >= n) return "Invalid";

      const tag = str.substring(i + 1, j);
      if (tag.startsWith("/")) {
        const tagName = tag.slice(1);
        if (stack.length === 0 || stack[stack.length - 1] !== tagName) {
          return stack.length === 0 ? tagName : stack[stack.length - 1];
        }
        stack.pop();
      } else {
        if (!allowedTags.has(tag)) return "Invalid";
        stack.push(tag);
      }

      i = j;
    }
    i++;
  }

  return stack.length > 0 ? stack[0] : true;
}

test("div", () => {
  expect(StringChallenge("<div><div><b></b></div></p>")).toBe("div");
});

test("i", () => {
  expect(
    StringChallenge("<div>abc</div><p><em><i>test test test</b></em></p>")
  ).toBe("i");
});
