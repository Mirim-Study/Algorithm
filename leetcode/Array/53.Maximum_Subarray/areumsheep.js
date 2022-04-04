/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
    const numsLen = nums.length;
    for(let i = 1; i< numsLen; i++){
        nums[i] = Math.max(nums[i], nums[i]+nums[i-1]);
    }
    return Math.max(...nums);
};
