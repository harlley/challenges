import { expect, test } from "vitest";

// function isValid(s) {
//   if (s.length % 2 !== 0) return false;
//   if (s[0] === ")" || s[0] === "}" || s[0] === "]") return false;
//   let stack = [];
//   for (let char of s) {
//     if (char === "(" || char === "{" || char === "[") {
//       stack.push(char);
//     } else {
//       let prev = stack.pop();
//       if (prev === "(" && char !== ")") return false;
//       if (prev === "{" && char !== "}") return false;
//       if (prev === "[" && char !== "]") return false;
//     }
//   }
//   console.log("stack", stack);
//   return stack.length === 0;
// }

// function isValid(s) {
//   let stack = [];
//   for (let c of s) {
//     if (c === "(") {
//       stack.push(")");
//     } else if (c === "{") {
//       stack.push("}");
//     } else if (c === "[") {
//       stack.push("]");
//     } else if (c !== stack.pop()) {
//       return false;
//     }
//     return stack.length === 0;
//   }
// }

function isValid(s) {
  let map = new Map();
  map.set("(", ")");
  map.set("{", "}");
  map.set("[", "]");

  let stack = [];

  for (let c of s) {
    if (map.has(c)) stack.push(map.get(c));
    else if (c !== stack.pop()) return false;
  }
  return stack.length === 0;
}

test("ex1", () => {
  expect(isValid("()")).toBe(true);
});

test("ex2", () => {
  expect(isValid("()[]{}")).toBe(true);
});

test("ex3", () => {
  expect(isValid("(]")).toBe(false);
});

test("ex4", () => {
  expect(isValid("([])")).toBe(true);
});

test("ex5", () => {
  expect(isValid("([)]")).toBe(false);
});

test("ex6", () => {
  expect(isValid("]")).toBe(false);
});

test("ex6", () => {
  expect(isValid("]]")).toBe(false);
});

test("ex7", () => {
  expect(isValid("()))")).toBe(false);
});
