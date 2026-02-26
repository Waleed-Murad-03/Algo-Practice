/* Write a Function that returns the largest number in an array*/

let array = [1, 2, 535, 3, 4, 5, 6, 305, 10, 20, 30];

function findLargest(array) {
  let MaxVal = 0; // = -Infinity
  for (let i = 0; i < array.length; i++) {
    if (array[i] > MaxVal) {
      MaxVal = array[i];
    }
  }

  return MaxVal;
}

const MaxValue = findLargest(array);
console.log(MaxValue);

// There is just one bug with my code above,
// If I put my Maxval = -1 and then i use an array of full negative numbers it will not work.
// Now one solution to this problem is to use "-Infinity".
// Another solution I can do is that I can set my MaxValue to be array[0]. So then we start comparing every element next to it.
