function daysRepresented(arr) {
  let days = 0;
  arr.forEach((elem) => {
    days += elem[1] - elem[0] + 1;
  });
  return days;
}

console.log(
  daysRepresented([
    [10, 15],
    [25, 35],
  ])
); // => 17
console.log(
  daysRepresented([
    [2, 8],
    [220, 229],
    [10, 16],
  ])
); // => 24
console.log(
  daysRepresented([
    [13, 20],
    [86, 93],
  ])
); // => 16
console.log(
  daysRepresented([
    [1, 2],
    [8, 10],
    [12, 15],
  ])
); // => 9
console.log(
  daysRepresented([
    [2, 8],
    [10, 16],
    [19, 26],
  ])
); // => 22
