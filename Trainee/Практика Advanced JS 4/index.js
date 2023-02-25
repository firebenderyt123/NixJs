function example(arr, N) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === N) {
        return [i, j];
      }
    }
  }
  return null;
}

console.log(example([2, 7, 11, 15], 9)); // => [0, 1]
console.log(example([12, 24, 34, 2], 14)); // => [0, 3]
console.log(example([2, 7, 11, 15], 22)); // => [1, 3]
