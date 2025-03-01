/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let res = new Set();
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    let target = -nums[i];
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      let current_sum = nums[left] + nums[right];
      if (current_sum == target) {
        res.add([target, nums[left], nums[right]]);
      }
      if (current_sum > target) {
        right -= 1;
      } else {
        left += 1;
      }
    }
    return res;
  }
};
