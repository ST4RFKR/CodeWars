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
