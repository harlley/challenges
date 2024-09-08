function reverse(str) {
  let reversed = "";
  for (char of str) {
    reversed = char.concat(reversed);
  }
  return reversed;
}

console.log(reverse("top"));

function palindrome(str) {
  return str === reverse(str);
}

console.log(palindrome("ovo")); //true
console.log(palindrome("top")); //false
