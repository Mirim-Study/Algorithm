/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const uniqueArr = [...new Set(nums)];
    return uniqueArr.length === nums.length ? false : true;
};
