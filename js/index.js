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
    let correct = ['O', 'S', 'I']
    let strToArr = string.split('');


    for (let i = 0; i < strToArr.length; i++) {
        for (let j = 0; j < inCorrect.length; j++) {
            if (strToArr[i] === inCorrect[j]) {
                strToArr[i] = correct[j]
            }
        }

    }
    return strToArr.join('');
}

console.log(correct('L0ND0N'));
console.log(correct('51NGAP0RE'));

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
        return 'Underweight'
    } else if (bmi <= 25) {
        return 'Normal'
    } else if (bmi <= 30) {
        return 'Overweight'
    } else if (bmi > 30) {
        return 'Obese'
    }

}

// 7 kyu
// Odd or Even?
// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).

function oddOrEven(array) {
  let sum = array.reduce((acc, item) => {
    return  acc + item
  },0)

 return sum % 2 === 0 ?  'even' :  'odd'

}


