function first() {
  if ("0") {
    alert('Привет');
  }
  // Да, выведется.
}
function second() {
  let value = prompt('Какое "официальное" название JavaScript?', '');

  if (value == 'ECMAScript') {
    alert('Верно!');
  } else {
    alert('Не знаете? ECMAScript!');
  }
}
function third() {
  let value = prompt('Введите число', 0);

  if (value > 0) {
    alert(1);
  } else if (value < 0) {
    alert(-1);
  } else {
    alert(0);
  }
}
function fourth() {
  let result = (a + b < 4) ? 'Мало' : 'Много';
}
function fifth() {
  let message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
      (login == '') ? 'Нет логина' :
        '';

}
