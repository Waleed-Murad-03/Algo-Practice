/*
8.) 
Right-Angled Triangle of Alternating 1s and 0s (Global Toggle)
1
0 1
0 1 0
1 0 1 0
*/

let n = 5;

let toggle = 1;

for (let i = 0; i < n; i++) {
  let row = '';
  for (let j = 0; j < i + 1; j++) {
    row = row + toggle;
    toggle = toggle === 1 ? 0 : 1;
  }

  console.log(row);
}
