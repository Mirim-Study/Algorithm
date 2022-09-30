function solution(nums) {
    const distinctNums = new Set([...nums]);
    const distinctNumsCount = [...distinctNums].length;
    const maxChoose = nums.length/2;
    
    return maxChoose >= distinctNumsCount ? distinctNumsCount : maxChoose;
}
