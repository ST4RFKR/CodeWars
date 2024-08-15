//7 kyu Testing 1-2-3
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.
const arr = ['a', 'b', 'c'];
var number = function (array) {
  const fixedArr = array.map((item, idx) => {
    return `${idx + 1}:${item}`;
  });

  return fixedArr;
};
const number1 = (array) => array.map((item, idx) => `${idx + 1}:${item}`);

//Sum of positive
// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

const positiveSum = (arr) => arr.filter((i) => i > 0).reduce((acc, item) => (acc += item), 0);

positiveSum([1, -4, 7, 12]);
console.log(positiveSum([1, -4, 7, 12]));

// 8 kyu If you can't sleep, just count sheep!!
// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num) {
  let str = '';
  if (num < 0) return;
  if (num === 0) return str;
  for (let i = 0; i < num; i++) {
    console.log(i);
    str = str + `${i + 1} sheep...`;
  }
  return str;
};
console.log(countSheep(4));
console.log(countSheep(0));
console.log(countSheep(1));
