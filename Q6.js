/* 
Predict the Output for Loop Within a loop. 
*/

// 1.)
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i + ' ' + j);
  }
}

// 2.)
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < i; j++) {
    console.log(i, j);
  }
}

// 3.)
for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    console.log(i, j);
  }
}

// 4.)
for (let i = 0; i <= 3; i++) {
  for (let j = i; j > 0; j--) {
    console.log(i, j);
  }
}

// 5.)
for (let i = 5; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    console.log(i, j);
  }
}
