/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    if (res.length) {
      break;
    }
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        debugger;
        res.push(i, j);
      }
    }
  }
  return res;
};

// console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1];
// console.log(twoSum([3, 2, 4], 6)); // [1, 2 ];
console.log(twoSum([2, 5, 5, 11], 10)); // [1, 2 ];

var twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }

  return [];
};
