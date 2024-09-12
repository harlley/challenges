// function hi() {
//   return (() => {
//     const name = "John";
//     return `Hi, ${name}`;
//   })();
// }

// function hi() {
//   return () => {
//     const name = "John";
//     return `Hi, ${name}`;
//   };
// }

//console.log(hi()());

// let horseShoe = "🐴👟";
// console.log(horseShoe.length);
// // → 4
// console.log(horseShoe.codePointAt(0));

let arrays = [[1, 2, 3], [4, 5], [6]];
// let flat = arrays.flat();
let flat = arrays.reduce((val, acc) => {
  return val.concat(acc);
}, []);
console.log(flat);

function loop(val, test, update, body) {
  let n = val;
  while (test(n)) {
    body(n);
    n = update(n);
  }
}

loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);
