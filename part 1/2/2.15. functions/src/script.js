function first(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Родители разрешили?');
    // or
    if (age > 18) {
      return true;
    }
    // ...
    return confirm('Родители разрешили?');
  }
  // both
}
function second(age) {
  // ?
  return (age > 18) ? true : confirm('Родители разрешили?');
  // ||
  return (age > 18) || confirm('Родители разрешили?');
}
function third(a, b) {
  return a < b ? a : b;
}
function fourth(x, a) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
  alert(pow(x, n));
}
