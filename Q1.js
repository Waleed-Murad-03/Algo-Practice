// Write a function that searches for an element in an array and returns the index,
// if the element is not present then just return -1.
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function searchIndex(array, goal) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == goal) {
      return i;
    }
  }
  return -1;
}
let goalindex = searchIndex(array, 11);
console.log(goalindex);
