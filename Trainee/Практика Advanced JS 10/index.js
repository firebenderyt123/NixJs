function check_password(passwd) {
  const valid = "valid";
  const invalid = "not valid";

  if (passwd.length < 8 || passwd.length > 20) {
    return invalid;
  }
  let a = (passwd.match(/[a-z]/g) || []).length;
  if (a < 1) {
    return invalid;
  }
  let b = (passwd.match(/[A-Z]/g) || []).length;
  if (b < 1) {
    return invalid;
  }
  let c = (passwd.match(/[0-9]/g) || []).length;
  if (c < 1) {
    return invalid;
  }
  let d = (passwd.match(/[!@#$%^&*?.]/g) || []).length;
  if (d < 1) {
    return invalid;
  }
  if (a + b + c + d !== passwd.length) {
    return invalid; // проверка на неразрешенные символы
  }

  return valid;
}

console.log(check_password("")); // => "not valid"
console.log(check_password("password")); // =>"not valid"
console.log(check_password("P1@p")); // => "not valid"
console.log(check_password("P1@pP1@p")); // => "valid"
console.log(check_password("P1@pP1@pP1@pP1@pP1@pP1@p")); // => "not valid"
console.log(check_password("Paaaaaa222!!!")); // => "valid"
console.log(check_password("Paaa/aa222!!!")); // => "not valid"
