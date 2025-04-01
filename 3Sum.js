/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => a-b); // sort the array - 0(nlogn)
    let result = [];
    let n = nums.length;
    for (let i = 0; i < n; i++) {
      let target = -nums[i];
      let left = i + 1;
      let right = n - 1;
      while(left < right){
        let currentSum = nums[left] + nums[right];
        if (currentSum === target) {
         result.push([nums[i], nums[left], nums[right]]);
        }
        else if (currentSum < target) {
          left++;
        }
        else {
          right--;
        }
      }
    }

}; 