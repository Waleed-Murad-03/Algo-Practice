/*
Write a function that returns the count of digits in a number


function countDigit(n) {
  let count = 0;

  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

let num = 56475685;

let result = countDigit(num);

console.log(result);


Corner Cases Include 
 - What if my n = 0? Then it should return for me 1. 
 - Whatt if my n is a negative number, 
   with my old solution it will give me 0 
   because it is less than than 0.
   I will fix it by using Math.abs

   Final Code Below
*/

function countDigit(n) {
  if (n === 0) return 1;

  n = Math.abs(n);
  let count = 0;

  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

let num = -69599689005554455;

let result = countDigit(num);

console.log(result);
