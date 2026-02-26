// Write a function that returns the smallest element in an array. (Also take a hint which is to use +Infinity)

let array = [43, 111, 4, 6, 8, 22];

function MinValue(array) {
  let MinValue = +Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < MinValue) {
      MinValue = array[i];
    }
  }

  return MinValue;
}

const smallestValue = MinValue(array);
console.log(smallestValue);
