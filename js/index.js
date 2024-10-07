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

// 8 kyu Count by X
// Create a function with two arguments that will return an array of the first n multiples of x.
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
// Return the results as an array or list ( depending on language ).

function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z;
}

//16.08.2024
//8 kyu
// Correct the mistakes of the character recognition software
// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.
// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.
// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:
// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake
// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.
let str = 'L0ND0N';

function correct(string) {
  let inCorrect = ['0', '5', '1'];
  let correct = ['O', 'S', 'I'];
  let strToArr = string.split('');

  for (let i = 0; i < strToArr.length; i++) {
    for (let j = 0; j < inCorrect.length; j++) {
      if (strToArr[i] === inCorrect[j]) {
        strToArr[i] = correct[j];
      }
    }
  }
  return strToArr.join('');
}

// console.log(correct('L0ND0N'));
// console.log(correct('51NGAP0RE'));

// 8 kyu
// Calculate BMI
// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

function bmi(weight, height) {
  let bmi = weight / (height * height);

  if (bmi <= 18.5) {
    return 'Underweight';
  } else if (bmi <= 25) {
    return 'Normal';
  } else if (bmi <= 30) {
    return 'Overweight';
  } else if (bmi > 30) {
    return 'Obese';
  }
}

// 7 kyu
// Odd or Even?
// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).

function oddOrEven(array) {
  let sum = array.reduce((acc, item) => {
    return acc + item;
  }, 0);

  return sum % 2 === 0 ? 'even' : 'odd';
}
// 7 kyu
// Find the middle element

// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

function gimme(triplet) {
  let max = Math.max(...triplet);
  let min = Math.min(...triplet);

  let [middleNum] = triplet.filter((item) => item !== max && item !== min);
  let middleIndex = triplet.findIndex((item) => item == middleNum);

  return middleIndex;
}
gimme([2, 3, 1]);
// 6 kuy isPangram
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
function isPangram(string) {
  let alphabetSet = new Set('abcdefghijklmnopqrstuvwxyz');
  const toLowerCase = string.toLowerCase();
  const removeSpacesAndJoin = toLowerCase.split(' ').join('');
  const uniqSumbols = new Set(removeSpacesAndJoin);
  let isPangram = [...alphabetSet].every((item) => uniqSumbols.has(item));
  return isPangram;
}
isPangram('The quick brown fox jumps over the lazy dog.');
// 8 kyu
// What is between?
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
// For example:
// a = 1
// b = 4
// --> [1, 2, 3, 4]
function between(a, b) {
  let res = [];
  for (let i = a; i <= b; i++) {
    res.push(i);
  }
  return res;
}
between(1, 4);
// 7 kyu
// Number of People in the Bus
// There is a bus moving in the city which takes and drops some people at each bus stop.
// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.
// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D
// Take a look on the test cases.
// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.
// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.
var number = function (busStops) {
  let firstArr = [];
  let twoArr = [];
  let sumFirtsArr = 0;
  let sumTwoArr = 0;
  for (let i = 0; i < busStops.length; i++) {
    for (let j = 0; j < 1; j++) {
      firstArr.push(busStops[i][0]);
    }
  }
  for (let i = 0; i < busStops.length; i++) {
    for (let j = 0; j < 1; j++) {
      twoArr.push(busStops[i][1]);
    }
  }
  sumFirtsArr = firstArr.reduce((acc, item) => {
    return (acc = acc + item);
  }, 0);
  sumTwoArr = twoArr.reduce((acc, item) => {
    return (acc = acc + item);
  }, 0);

  return sumFirtsArr - sumTwoArr;
};
number([
  [10, 0],
  [3, 5],
  [5, 8],
]);
// 7 kyu
// Mumbling
// This time no story, no theory. The examples below show you how to write function accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.
function accum(s) {
  let result = s
    .split('')
    .map((item, idx) => {
      return item.toUpperCase() + item.toLowerCase().repeat(idx);
    })
    .join('-');
  return result;
}
// 8 kyu
// Removing Elements
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!
function removeEveryOther(arr) {
  let filteredArr = arr.filter((item, idx) => {
    return idx % 2 === 0;
  });
  return filteredArr;
}

// 6 kyu Mexican Wave
// The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position.
// The result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their seats. In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd. When the gap in seating is narrow, the wave can sometimes pass through it. Usually only one wave crest will be present at any given time in an arena, although simultaneous, counter-rotating waves have been produced. (Source Wikipedia)
// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
// Rules
//  1.  The input string will always be lower case but maybe empty.
//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
function wave(str) {
  let arr = [];
  if (str.length <= 0) return;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') continue;
    let newStr = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
    arr.push(newStr);
  }
  return arr;
}
wave('hello');
// 7 kyu
// Binary Addition
// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
// The binary number returned should be a string.
// Examples:(Input1, Input2 --> Output (explanation)))
// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
function addBinary(a, b) {
  let sum = a + b;
  return sum.toString(2);
}

// console.log(addBinary(5, 9));
// 8 kyu
// Beginner - Lost Without a Map
// Given an array of integers, return a new array with each value doubled.
// For example:
// [1, 2, 3] --> [2, 4, 6]
function maps(x) {
  return x.map((item) => item * 2);
}
// 8 kyu
// Square(n) Sum
// 159038292% of 18,00896,768 of 272,176jhoffner1 Issue Reported
//  JavaScript
// Node v18.x
// VIM
// EMACS
// Instructions
// Output
// Past Solutions
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers) {
  return numbers.reduce((acc, item) => (acc = acc + item * item), 0);
}
// 6 kyu
// Who likes it?
// 503395586% of 27,340131,065 of 335,007BattleRattle
//  JavaScript
// Node v18.x
// VIM
// EMACS
// Instructions
// Output
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
function likes(names) {
  let namesLength = names.length - 2;
  console.log(namesLength);
  switch (names.length) {
    case 0:
      return 'no one likes this';
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    case 4:
      return `${names[0]}, ${names[1]} and ${2} others like this`;
    default:
      return `${names[0]}, ${names[1]} and ${namesLength} others like this`;
  }
}
function makeUpperCase(str) {
  return str.toUpperCase();
}
// 6 kyu
// Count the smiley faces!
// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
// Rules for a smiling face:
// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.
// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

let validSmile = [':)', ';)', ':-)', ';-)', ':~)', ';~)', ':D', ';D', ':-D', ';-D', ':~D', ';~D'];
function countSmileys(arr) {
  let count = 0;
  arr.forEach((item) => {
    for (let i = 0; i < validSmile.length; i++) {
      if (item === validSmile[i]) {
        count++;
      }
    }
  });
  return count;
}
// console.log(countSmileys([':D', ':~)', ';~D', ':)']));
// console.log(countSmileys([':)', ':(', ':D', ':O', ':;']));
// console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));
function finalGrade(exam, projects) {
  if ((exam > 90 && projects > 10) || projects > 10) {
    return 100;
  } else if (exam > 75 && projects >= 5) {
    return 90;
  } else if (exam > 50 && projects >= 2) {
    return 75;
  } else {
    return 0;
  }
}
// console.log(finalGrade(100, 12));
// console.log(finalGrade(85, 5));
// console.log(finalGrade(52, 12));
// console.log(finalGrade(0, 11));

function arrayDiff(a, b) {
  return a.filter((item) => !b.some((bItem) => bItem === item));
}

// console.log(arrayDiff([1, 2, 2], [1]));
// console.log(arrayDiff([1, 2, 3], [1, 2]));
function fakeBin(x) {
  return x
    .split('')
    .map((item) => (item <= '4' ? '0' : '1'))
    .join('');
}
function basicOp(operation, value1, value2) {
  switch (operation) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      return value1 / value2;
    default:
      return 0;
  }
}

function removeChar(str) {
  return str.slice(1, -1);
}

function smash(words) {
  return words.join(' ');
}

function twiceAsOld(dadYearsOld, sonYearsOld) {
  let difference = 2 * sonYearsOld - dadYearsOld;
  return Math.abs(difference);
}
function basicOp(operation, value1, value2) {
  switch (operation) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      return value1 / value2;
    default:
      return 0;
  }
}
function removeChar(str) {
  return str.slice(1, -1);
}
function smash(words) {
  return words.join(' ');
}
function twiceAsOld(dadYearsOld, sonYearsOld) {
  let difference = 2 * sonYearsOld - dadYearsOld;
  return Math.abs(difference);
}
function toJadenCase(str) {
  let newStr = str.split(' ').map((word) => word.replace(word[0], word[0].toUpperCase()));
  return newStr.join(' ');
}
String.prototype.toJadenCase = function () {
  return this.split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

toJadenCase("How can mirrors be real if our eyes aren't real");
function isIsogram(str) {
  let strtoLover = str.toLowerCase();
  // console.log([...strtoLover].join(''))
  // console.log([...new Set([...strtoLover])].join(''))

  if ([...strtoLover].join('') === [...new Set([...strtoLover])].join('')) {
    return (res = true);
  } else {
    return (res = false);
  }
}

function filter_list(l) {
  return l.filter((el) => typeof el !== 'string');
}
function humanReadable(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(
    secs,
  ).padStart(2, '0')}`;
}
function reverseList(list) {
  return list.reverse();
}
var uniqueInOrder = function (iterable) {
  // let strToArr = iterable.split("");
  let strToArr = [...iterable];
  let res = [];
  for (let i = 0; i < strToArr.length; i++) {
    // console.log(strToArr[i]);
    if (strToArr[i] !== strToArr[i + 1]) {
      res.push(strToArr[i]);
    }
  }

  return res;
};
uniqueInOrder('AAAABBBCcCDAABBB');
function findSmallestInt(arr) {
  let arrSorted = arr.sort((a, b) => a - b);
  return arrSorted[0];
}

function hoopCount(n) {
  return n < 10 ? 'Keep at it until you get it' : 'Great, now move on to tricks';
}
function solution(string) {
  // let arrLover = string.toLowerCase().split('');
  // let word = [];
  // let idx = [];
  // arrLover.forEach((el, idx) => {
  //   if (el !== string.split('')[idx]) {
  //     word.push(string.split('')[idx]);
  //   }
  // });
  // idx = string.replace(word, ` ${word}`);
  // console.log(word, idx);
  // // for (let i = 0; i < word.length; i++) {
  // //   idx = string.replace(word, `${word}`);
  // // }
  string = string.split('').map((el) => {
    if (el === el.toUpperCase()) {
      el = ' ' + el;
    }
    return el;
  });
  return string.join('');
}
function highAndLow(numbers) {
  const numArray = numbers.split(' ').map(Number);
  const max = Math.max(...numArray);
  const min = Math.min(...numArray);
  return `${min}, ${max}`;
}
function getMiddle(s) {
  let arr = [];
  const len = s.length; // Определяем длину строки
  if (len % 2 === 0) {
    // Если длина четная
    arr.push(s[len / 2 - 1], s[len / 2]);
  } else {
    // Если длина нечетная
    arr.push(s[Math.floor(len / 2)]);
  }
  return arr.join('');
}
function sumTwoSmallestNumbers(numbers) {
  let Sorted = numbers.sort((a, b) => a - b);
  // Sorted.map((el, idx,arr) => {
  //   if (el > 0){
  //     arr.push(el)
  //   }
  // })
  return Sorted[0] + Sorted[1];
}
function gimme(triplet) {
  const sorted = [...triplet].sort((a, b) => a - b);
  const midl = sorted[1];
  return triplet.indexOf(midl);
}
function bubbleSort(arr) {
  const n = arr.length; // Довжина масиву

  for (let i = 0; i < n - 1; i++) {
    // Проходимо масив
    let swapped = false; // Флаг для перевірки обміну

    for (let j = 0; j < n - 1 - i; j++) {
      // Порівнюємо сусідні елементи
      if (arr[j] > arr[j + 1]) {
        // Якщо елемент більше наступного
        // Обмін місцями
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true; // Встановлюємо флаг
      }
    }

    // Якщо не було обміну, масив вже відсортовано
    if (!swapped) {
      break;
    }
  }

  return arr; // Повертаємо відсортований масив
}
var number = function (array) {
  let fix = [];
  array.map((el, idx) => {
    fix.push(`${idx + 1}: ${el}`);
  });
  return fix;
};
function XO(str) {
  let strLover = str.toLowerCase();
  let xCount = 0;
  let oCount = 0;

  strLover.split('').forEach((el) => {
    if (el === 'x') {
      xCount++;
    } else if (el === 'o') {
      oCount++;
    }
  });
  if (xCount === 0 && oCount === 0) return true;
  return xCount === oCount;
}
function arithmetic(a, b, operator) {
  switch (operator) {
    case 'add':
      return a + b;
    case 'subtract':
      return a + b;
    case 'multiply':
      return a * b;
    case 'divide':
      return a / b;
  }
}
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

// console.log(arithmetic(1, 2, 'add'));
// function solution(number) {
//   let arr = [1, 5, 10, 50, 100, 500, 1000];
//   let res = [];

//   let count;
//   for (let i = arr.length - 1; i < 0; i--) {
//     if (number - arr[arr.length - i] >= number) {
//       number -= arr[arr.length - i];
//     }
//   }
// }
// console.log(solution(2008));
function count(string) {
  return string.split('').reduce((acc, el) => {
    if (!acc[el]) {
      acc[el] = 0;
    }
    acc[el]++;
    return acc;
  }, {});
}
// console.log(count('aba'));
function maps(x) {
  return x.map((el) => el * 2);
}

function multiply(a, b) {
  return a * b;
}
const square = (a) => {
  return a * a;
};
function peopleWithAgeDrink(old) {}
// console.log(peopleWithAgeDrink(30));

function checkForFactor(base, factor) {
  if (base % factor == 0) {
    return true;
  } else {
    return false;
  }
}

// function between(a, b) {
//   let arr = [];
//   for (let i = a; i <= b; i++) {
//     arr.push(i);
//   }
//   return arr;
// }
// console.log(between(1, 4))

function reverseWords(str) {
  let arr = str.split(' ');
  let arrToRever = arr.map((el) => el.split('').reverse().join(''));
  return arrToRever.join(' ');
}
// console.log(reverseWords('This is an example!'));

function spinWords(string) {
  return string
    .split(' ')
    .map((el) => (el.length >= 5 ? el.split('').reverse().join('') : el))
    .join(' ');
}
function vaporcode(string) {
  let bra = string.split('');
  let x = bra.map((el) => {
    if (el === ' ') return '';

    return el.toUpperCase();
  });
  return x.join('').split('').join('  ');
}

// console.log(vaporcode('Lets go to the movies'));

function solution(string) {
  let arrLover = string.toLowerCase().split('');
  let word = [];

  let idx = [];
  arrLover.forEach((el, idx) => {
    if (el !== string[idx]) {
      word.push(string[idx]);
    }
  });
  // idx = string.replace(word, ` ${word}`);
  // console.log(word, idx);
  // debugger;
  console.log(word);
  for (let i = 0; i < word.length; i++) {
    return string.replace(word[i], ` ${word[i]}`);
  }
  return idx;
  // string = string.split('').map((el) => {
  //   if (el === el.toUpperCase()) {
  //     el = ' ' + el;
  //   }
  //   return el;
  // });
  // return string.join('');
}

// console.log(solution('camelCasing'));
// console.log(solution('camelCasingRamel'));
// function solution(string) {
//   const arr = string.split('');
//   const newArr = arr.map((e) => {
//     console.log('2', e.toUpperCase(), '1', e);
//     // console.log('1', e);
//     if (e === e.toUpperCase()) {
//       return ` ${e}`;
//     }
//     return e;
//   });
//   return newArr.join('');
// }
// console.log(solution('camelCasingFaceHello'));

// function findOdd(A) {
//   let x;
//   let res = A.sort((a, b) => a - b);

//   res.map((el, idx) => {
//     if (el[idx] !== el[idx + 1]) {
//       x = el[idx];
//     }
//   });
//   console.log(x);
//   return res;
// }

// console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
// let myStr = 'хороший день';
// let day = [[...myStr]];
// console.log(day);
// let x = []
// for (const [el, idx] of [1,2,3]) {

// }
Array.prototype.myFilter = function (callback) {
  const result = [];

  // console.log(this);

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};
const numbers = [1, 2, 3, 4, 5];
const filtered = numbers.myFilter((num) => num > 2);

// console.log(filtered);

multiplicationTable = function (size) {
  let strArr = [];

  for (let i = 1; i <= size; i++) {
    let str = [];
    for (let j = 1; j <= size; j++) {
      str.push(i * j);
    }
    strArr.push(str);
  }

  return strArr;
};
// console.log(multiplicationTable(3));

const products = {
  apple: 10,
  banana: 5,
  orange: 8,
};
