/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const search_max = nums.length;

  for (let i = 0; i < search_max; i++) {
    for (let j = i + 1; j < search_max; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
