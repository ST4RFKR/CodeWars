/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  x = x.toString();
  let xReverse = x.split('').reverse().join('');
  if (x === xReverse) {
    return true;
  }
  return false;
};

console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); //false

var isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false; // Отрицательные числа и числа, оканчивающиеся на 0 (кроме 0), не палиндромы.
  }

  let reversed = 0;
  let original = x;

  while (x > 0) {
    let digit = x % 10; // Последняя цифра числа
    reversed = reversed * 10 + digit; // Построение обратного числа
    x = Math.floor(x / 10); // Убираем последнюю цифру
  }

  return original === reversed;
};
