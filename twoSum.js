// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function (nums, target) {
//   let res = [];

//   for (let i = 0; i < nums.length; i++) {
//     if (res.length) {
//       break;
//     }
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         debugger;
//         res.push(i, j);
//       }
//     }
//   }
//   return res;
// };

// console.log(twoSum([2, 5, 5, 11], 10));

// var twoSum = function (nums, target) {
//   let map = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     let complement = target - nums[i];
//     if (map.has(complement)) {
//       return [map.get(complement), i];
//     }
//     map.set(nums[i], i);
//   }

//   return [];
// };

// Дан массив
// сonst arr = [1,1,2,2,2,5,5,5,2,7]

// Необходимо вернуть новый массив, содержащий уникальные элементы из исходного массива,
// отсортированные по частоте их появления в порядке убывания.
// То есть, числа, которые встречаются чаще, должны идти раньше.
// Например, в данном массиве число 2 встречается чаще всего (4 раза),
// затем идет число 5 (3 раза), далее число 1 (2 раза) и, наконец, число 7 (1 раз).

// Таким образом, результат должен быть:
// [2, 5, 1, 7]

// Был в четверг собес, была такая задачка
// const arr = [1, 1, 2, 2, 2, 5, 5, 5, 2, 7];
// function fn(params) {
//   let res = [];
//   for (let i = 0; i < params.length; i++) {
//     const chank = [];
//     if (params[i] === params[i + 1]) {
//       chank.push(params[i]);
//     }
//   }
// }
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function (nums, target) {
//   let left = 0;
//   let right = nums.length - 1;
//   while (left < right) {
//     let sum = nums[left] + nums[right];
//     if (sum < target) {
//       left++;
//     }
//     if (sum > target) {
//       right--;
//     }
//     if (sum === target) {
//       return [left, right];
//     }
//   }
//   return [];
// };
// console.log(twoSum([2, 7, 11, 15], 9));
function reverse(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left === right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  return arr;
}
console.log(reverse(['a', 'b', 'c', 'd', 'e']));
