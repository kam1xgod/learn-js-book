function first() {
  let a = 1, b = 1;

  let c = ++a; // 2, a=2
  let d = b++; // 1, b=2
}

function second() {
  let a = 2;

  let x = 1 + (a *= 2); // 5
}

function third() {
  "" + 1 + 0 = "10"
  "" - 1 + 0 = -1
  true + false = 1
  6 / "3" = 2
  "2" * "3" = 6
  4 + 5 + "px" = "9px"
  "$" + 4 + 5 = "$45"
  "4" - 2 = 2
  "4px" - 2 = NaN
  "  -9  " + 5 = "  -9  5"
  "  -9  " - 5 = -14
  null + 1 = 1
  undefined + 1 = NaN
  " \t \n" - 2 = -2
}

function fourth() {
  let a = +prompt("Первое число?", 1);
  let b = +prompt("Второе число?", 2);

  alert(a + b); // 3
}
