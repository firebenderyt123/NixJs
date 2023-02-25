function solve(str) {
  let upperCount = 0;
  let lowerCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      upperCount++;
    } else {
      lowerCount++;
    }
  }

  if (lowerCount >= upperCount) {
    return str.toLowerCase();
  } else {
    return str.toUpperCase();
  }
}

console.log(solve("code")); // => 'code'
console.log(solve("CODe")); //  => 'CODE'
console.log(solve("COde")); // => 'code'
console.log(solve("Code")); // => 'code'
