function first() {
let i = 3;

while (i) {
  alert( i-- );
}
  // 1
}
function second() {
let i = 0;
while (++i < 5) alert( i );
  // 1-4
i = 0;
while (i++ < 5) alert( i );
  // 1-5
}
function third() {
for (let i = 0; i < 5; ++i) alert( i );

for (let i = 0; i < 5; i++) alert( i );
  // 0-4 both.
}
function fourth() {
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert( i );
  }
}
}
function fifth() {
  let i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}
}
function sixth() {
let num;

do {
  num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num);
}

function seventh() {
let n = 10;
nextPrime:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
  }

  alert( i ); 
}
}
