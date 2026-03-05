/*
 - Give an integer x, return true if x is a palindrome and false if otherwise.
 - Palindrome: An integer is a palinndrome when it reads the same forward and backward

VERY IMPORTANT YOU NEED TO KNOW: 
 - n % 10 = It will return for me the last digit in a number.
 - n / 10 = It will remove for me the last digit in a number. 

 Final Answer with all Corner Cases:
*/

var isPalindrome = function (x) {
  if (x < 0) return false;

  let xcopy = x;

  let rev = 0;

  while (x > 0) {
    let rem = x % 10;
    rev = 10 * rev + rem;
    x = Math.floor(x / 10);
  }

  if (rev === xcopy) {
    return true;
  } else {
    return false;
  }
};

let num = -979;

let result = isPalindrome(num);
console.log(result);
