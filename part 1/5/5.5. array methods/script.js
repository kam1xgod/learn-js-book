function camelize(str) {
  return str
    .split('-')
    .map(
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join('');
}


function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b));
}

function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

function fourth() {
  let arr = [5, 2, 1, -10, 8];

  arr.sort((a, b) => b - a);

  alert(arr);
}

function copySorted(arr) {
  return arr.slice().sort();
}

function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {

    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2]

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  }

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}

function seventh() {
  let vasya = { name: "Вася", age: 25 };
  let petya = { name: "Петя", age: 30 };
  let masha = { name: "Маша", age: 28 };

  let users = [vasya, petya, masha];

  let names = users.map(item => item.name);

  alert(names);
}

function eighth() {
  let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
  let petya = { name: "Петя", surname: "Иванов", id: 2 };
  let masha = { name: "Маша", surname: "Петрова", id: 3 };

  let users = [vasya, petya, masha];

  let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
  }));

  alert(usersMapped[0].id);
  alert(usersMapped[0].fullName);
}

function sortByAge(arr) {
  arr.sort((a, b) => a.age > b.age ? 1 : -1);
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
}

function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}
