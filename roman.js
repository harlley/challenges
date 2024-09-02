function romanToInteger(s) {
  const symbolsMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;
  prevSymbol = "";
  for (symbol of s.split("").reverse().join("")) {
    // if ((prevSymbol === "V" || prevSymbol === "X") && symbol === "I") {
    //   total -= symbolsMap[symbol];
    // } else if ((prevSymbol === "L" || prevSymbol === "C") && symbol === "X") {
    //   total -= symbolsMap[symbol];
    // } else if ((prevSymbol === "D" || prevSymbol === "M") && symbol === "C") {
    //   total -= symbolsMap[symbol];
    // } else {
    //   total += symbolsMap[symbol];
    // }
    if (symbolsMap[prevSymbol] > symbolsMap[symbol]) {
      total -= symbolsMap[symbol];
    } else {
      total += symbolsMap[symbol];
    }
    prevSymbol = symbol;
  }
  return total;
}

console.log(romanToInteger("III")); // 3
console.log(romanToInteger("LVIII")); // 58
console.log(romanToInteger("MCMXCIV")); // 1994
console.log(romanToInteger("MCMXIV")); // 1914
