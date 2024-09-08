// function anagram(str1, str2) {
//   if (str1.length !== str2.length) return false;
//   let charMap1 = {};
//   let charMap2 = {};

//   for (let char of str1) {
//     if (Object.keys(charMap1).includes(char)) {
//       charMap1[char] += 1;
//     } else {
//       charMap1[char] = 1;
//     }
//   }

//   for (let char of str2) {
//     if (Object.keys(charMap2).includes(char)) {
//       charMap2[char] += 1;
//     } else {
//       charMap2[char] = 1;
//     }
//   }

//   for (let char of str1) {
//     if (charMap1[char] !== charMap2[char]) return false;
//   }

//   return true;
// }

function mapFromString(str) {
  const map = new Map();

  for (char of str) {
    let aux = map.get(char) || 0;
    map.set(char, ++aux);
  }

  return map;
}

function anagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const map1 = mapFromString(str1);
  const map2 = mapFromString(str2);

  for (char of str1) {
    if (map1.get(char) !== map2.get(char)) return false;
  }

  return true;
}

console.log(anagram("nameless", "salesmen")); // true
console.log(anagram("nameliss", "salesmen")); // false
