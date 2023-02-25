function solution(str, n) {
  if (str.length < n) {
    return str;
  } else {
    return str.slice(0, n) + "...";
  }
}

console.log(solution("Testing String", 3)); // => 'Tes...'
console.log(solution("Testing String", 8)); // => 'Testing ...'
console.log(solution("Test", 8)); // => 'Test'
