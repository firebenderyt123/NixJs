function mispelled(str1, str2) {
  let allowedDiff = 1;

  if (Math.abs(str1.length - str2.length) > allowedDiff) return false;

  let diffCount = 0;
  for (let i = 0, j = 0; i < str1.length && j < str2.length; i++, j++) {
    if (str1.charAt(i) !== str2.charAt(j)) {
      if (++diffCount > allowedDiff) {
        return false;
      }

      if (str1.length > str2.length) {
        j--;
      } else if (str1.length < str2.length) {
        i--;
      }
    }
  }

  return diffCount <= 1;
}

console.log(mispelled("versed", "xersed")); // => true
console.log(mispelled("versed", "applb")); // => false
console.log(mispelled("versed", "v5rsed")); // => true
console.log(mispelled("1versed", "versed")); // => true
console.log(mispelled("versed", "versed1")); // => true
console.log(mispelled("versed", "aversed")); // => true
console.log(mispelled("aaversed", "versed")); // => false
console.log(mispelled("versed", "aaversed")); // => false
