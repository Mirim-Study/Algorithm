/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let result = [];
    const numsLen = nums.length;
    const numsArrLen = nums.length -1;
    
    //value initialization
    let frontValue = [1];
    let backValue = [];
    backValue[numsArrLen] = 1;
    
    //calculate
    for(let i = 1; i < numsLen; i++){ //1,2,3
        frontValue[i] = nums[i-1] * frontValue[i-1];
    }
    for(let j = numsArrLen; j >= 0; j--){
        if(numsArrLen !== j) backValue[j] = nums[j+1] * backValue[j+1];        
        result[j] = frontValue[j] * backValue[j];
    }
    return result;
};
