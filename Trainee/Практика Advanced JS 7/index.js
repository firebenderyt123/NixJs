function solve(str, n) {
  if (str.length < n) {
    return "";
  }

  let arr = str
    .split("")
    .map((val, index) => {
      return { index, val };
    })
    .sort((a, b) => {
      return a.val > b.val ? 1 : a.val == b.val ? 0 : -1;
    });

  for (let i = 0; i < n; i++) {
    arr.shift();
  }

  let newStr = "";
  arr = arr.sort((a, b) => {
    return a.index > b.index ? 1 : a.index == b.index ? 0 : -1;
  });
  arr.forEach((elem) => {
    newStr += elem.val;
  });

  return newStr;
}

console.log(solve("abracadabra", 1)); // => 'bracadabra' # видалили один символ 'a'
console.log(solve("abracadabra", 2)); // => 'brcadabra' # видалили 2 символи 'a'
console.log(solve("abracadabra", 6)); // => 'rcdbr' # видалили 5 символів 'a', і тому символів 'а' більше не залишилося, видалили 1 символ 'b'
console.log(solve("abracadabra", 8)); // => 'rdr'
console.log(solve("abracadabra", 50)); // => ''
