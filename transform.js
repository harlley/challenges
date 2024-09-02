const initialArr = [
  { id: 0, name: "John", city: "Liverpool" },
  { id: 1, name: "Paul", age: 26, postcode: "E14 5RE" },
  { id: 2, name: "George", city: "Bristol" },
];

// keys               ["id", "name", "city", "age", "postcode"]
// replace by values  [[0, 1, 2], ["Jonh", Paul, George], ...]

// function transform(arr) {
//   const keys = arr.reduce((acc, obj) => {
//     return acc.concat(Object.keys(obj));
//   }, []);

//   const uniqueKeys = Array.from(new Set(keys));

//   const result = uniqueKeys.map((key) => {
//     return arr.map((obj) => {
//       return obj[key] || null;
//     });
//   });

//   return result;
// }

function transform(arr) {
  let keys = arr.reduce((acc, obj) => {
    return acc.concat(Object.keys(obj));
  }, []);
  // keys = [];
  // for (let obj of arr) {
  //   for (let key in obj) {
  //     keys.push(key);
  //   }
  // }

  console.log("keys", keys);

  let uniqueKeys = Array.from(new Set(keys));

  console.log("uniqueKeys", uniqueKeys);

  const result = uniqueKeys.map((key) => {
    return arr.map((object) => {
      return object[key] || null;
    });
  });

  return result;
}

// [
//   [0, 1, 2],
//   ["John", "Paul", "George"],
//   ["Liverpool", null, "Bristol"],
//   [null, 26, null],
//   [null, "E14 5RE", null],
// ];

const result = transform(initialArr);

console.log(result);
