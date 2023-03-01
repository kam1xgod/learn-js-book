function first() {
  alert(null || 2 || undefined); // 2
}
function second() {
  alert(alert(1) || 2 || alert(3)); //undefined
}
function third() {
  alert(1 && null && 2); //null
}
function fourth() {
  alert(alert(1) && alert(2)); // 1 -> undefined
}
function fifth() {
  alert(null || 2 && 3 || 4); // 3
}
function sixth() {
  if (age >= 14 && age <= 90)
}
function seventh() {
  if (!(age >= 14 && age <= 90))
}
function eighth() {

  if (-1 || 0) alert('first'); // вызовется
  if (-1 && 0) alert('second'); //не вызовется.
  if (null || -1 && 1) alert('third'); // вызовется.
}
function ninth() {
  let userName = prompt("Кто там?", '');

  if (userName === 'Админ') {

    let pass = prompt('Пароль?', '');

    if (pass === 'Я главный') {
      alert('Здравствуйте!');
    } else if (pass === '' || pass === null) {
      alert('Отменено');
    } else {
      alert('Неверный пароль');
    }

  } else if (userName === '' || userName === null) {
    alert('Отменено');
  } else {
    alert("Я вас не знаю");
  }
}
