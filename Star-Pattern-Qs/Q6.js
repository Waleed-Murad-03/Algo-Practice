/*
6.)
Print a Right-Aligned Right-Angled Triangle of Stars
      *
    * *
  * * *
* * * *
*/

let n = 6;

for (let i = 0; i < n; i++) {
  let row = '';

  for (let j = 0; j < n - (i + 1); j++) {
    row = row + ' - ';
  }
  for (let k = 0; k < i + 1; k++) {
    row = row + ' * ';
  }
  console.log(row);
}
