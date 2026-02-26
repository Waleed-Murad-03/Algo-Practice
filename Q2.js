/* 
Write a function that returns the number of negative numbers in an array.
*/

let array = [-3, -1, 2, 0, 1, 2, 3, 4, 5, 6, -9, -10];
let negativeNums = 0;

function CountNegatives(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      negativeNums++;
    }
  }
  return negativeNums;
}

let totalNumsOfNegative = CountNegatives(array);

console.log(totalNumsOfNegative);
