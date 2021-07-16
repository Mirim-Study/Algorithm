function solution(nums) {
    var n = nums.length / 2;
    var unique = [...new Set(nums)].length;
    
    return (n < unique) ? n : unique;
}
