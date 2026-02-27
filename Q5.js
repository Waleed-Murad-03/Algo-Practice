/* 
Write a function that returns the second largest element in an array
*/

let array = [1, 2, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12];

function SecondLargest(array) {
  if (array.length < 2) {
    return 'Make sure your array has more than 2 elements please!';
  }
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = array[i];
    } else if (array[i] > secondLargest && array[i] !== firstLargest) {
      secondLargest = array[i];
    }
  }
  return secondLargest;
}

let secondBiggest = SecondLargest(array);
console.log(secondBiggest);

/*
Some Arguable Corner cases
 - What if my Array is Empty?
 - What if my array has 1 element only? 
 - What if my array has negative numbers? 
 - What if my firstLargest and secondLargest are dupes? 
*/
