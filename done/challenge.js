const { deepStrictEqual } = require("node:assert/strict");

// const input = {
//   a: {
//     b: {
//       c: 1,
//       f: 2,
//     },
//     g: 3,
//   },
//   d: 2,
// };

const challenge = (input = {}, ks = []) => {
  // need to retrieve all the keys and values on the input
  // for each value, if the value is a object I need to repeat the process
  // if the value is primitive value I need to logged it out
  let values = Object.entries(input);
  for ([key, v] of values) {
    if (typeof v === "object") {
      challenge(v, [...ks, key]);
    } else {
      console.log([...ks, key], v);
    }
  }
  return [];
};

// const result = challenge(input, {
//   "a.b.c": 1,
//   "a.b.f": 2,
//   "a.g": 3,
//   d: 2,
// });

//console.log(result);
// { a: { b: { c: 1, f: 2 }, g: 3 }, d: 2 }
// { 'a.b.c': 1, 'a.b.f': 2, 'a.g': 3, d: 2 }

deepStrictEqual(
  challenge({
    a: {
      b: {
        c: 1,
        f: 2,
      },
      g: 3,
    },
    d: 2,
  }),
  {
    "a.b.c": 1,
    "a.b.f": 2,
    "a.g": 3,
    d: 2,
  }
);
