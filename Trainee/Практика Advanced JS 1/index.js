function solve(str) {
  const regexp = RegExp("[*/+-]", "g");
  let newStr = "";
  let startIndex = 0;

  while ((matches = regexp.exec(str)) !== null) {
    newStr = matches[0] + str.slice(startIndex, regexp.lastIndex - 1) + newStr;
    startIndex = regexp.lastIndex;
  }
  newStr = str.slice(startIndex, str.length) + newStr; // чтобы не терялся последний кусок

  return newStr;
}

console.log(solve("100*b/y")); // => "y/b*100"
console.log(solve("a+b-c/d*30")); // => "30*d/c-b+a"
console.log(solve("a*b/c+50")); // => "50+c/b*a"
