function solution(nums) {
    const maxChose = nums.length / 2;
    const deleteOverLap = new Set(nums);
    const deleteOverLapSize = deleteOverLap.size;
    
    return deleteOverLapSize >= maxChose ? maxChose : deleteOverLapSize;
}
