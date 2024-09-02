function mapFromArray(arr) {
  map = new Map();
  for (let num of arr) {
    let aux = map.get(num) || 0;
    map.set(num, ++aux);
  }
  return map;
}

function unique(arr) {
  let map = mapFromArray(arr);
  let count = 0;
  for (let n of arr) {
    if (map.get(n) == 1) {
      count++;
    }
  }
  return count;
}

console.log(unique([1, 2, 3, 4, 1])); // 3
console.log(unique([1, 1, 1])); // 0
console.log(unique([1, 2, 3, 4])); // 4
