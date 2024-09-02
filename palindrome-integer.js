// function isPalindrome(x) {
//   if (x < 0) return false;

//   let reversed = "";
//   for (let char of x.toString()) {
//     reversed = char + reversed;
//   }
//   return Number(reversed) === x;
// }

function isPalindrome(x) {
  if (x < 0) return false;
  let original = x,
    reversed = 0;
  while (x !== 0) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return original === reversed;
}
console.log(isPalindrome(121)); //true
console.log(isPalindrome(-121)); //false
console.log(isPalindrome(10)); //false
