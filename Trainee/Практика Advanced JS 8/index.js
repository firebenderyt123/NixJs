function timeCorrect(time) {
  let [h, m, s] = time.split(":");
  let [hi, mi, si] = [parseInt(h), parseInt(m), parseInt(s)];

  if (si > 59) {
    s = (si % 60).toString();
    mi += Math.floor(si / 60);
    m = mi.toString();
  }

  if (mi > 59) {
    m = (mi % 60).toString();
    hi += Math.floor(mi / 60);
    h = hi.toString();
  }

  if (hi > 23) {
    h = (hi % 24).toString();
  }

  return (
    (h.length == 1 ? "0" : "") +
    h +
    ":" +
    (m.length == 1 ? "0" : "") +
    m +
    ":" +
    (s.length == 1 ? "0" : "") +
    s
  );
}

console.log(timeCorrect("09:10:01")); // => '09:10:01'
console.log(timeCorrect("11:70:10")); // => '12:10:10'
console.log(timeCorrect("19:99:09")); // => '20:39:09'
console.log(timeCorrect("19:99:99")); // => '20:40:39'
console.log(timeCorrect("24:01:01")); // => '00:01:01'
console.log(timeCorrect("52:01:01")); // => '04:01:01'
