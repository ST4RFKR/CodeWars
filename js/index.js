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
