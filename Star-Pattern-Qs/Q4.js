/*
4.)
Print a Right-Angled Triangle of Repeated Numbers
1
2 2
3 3 3
4 4 4 4
*/

let n = 4;

for (let i = 0; i < n; i++) {
  let row = '';

  for (let j = 0; j < i + 1; j++) {
    row = row + ' ' + (i + 1);
  }
  console.log(row);
}
