/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let lover = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  let left = 0;
  let right = lover.length - 1;

  while (left < right) {
    if (lover[left] !== lover[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
console.log(isPalindrome('A man, a plan, a canal: Pa1nama'));
