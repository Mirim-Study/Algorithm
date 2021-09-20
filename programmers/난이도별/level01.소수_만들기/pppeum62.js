function solution(nums) {
    let answer = 0;
    const isPrime = num => {
        for (let i = 2; i <= Math.sqrt(num); i++)
            if (num % i === 0) return false;
        return num > 1;
    }
    
    for (let i = 0; i < nums.length - 2; i++) {
        let temp = 0;
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                temp = nums[i] + nums[j] + nums[k];
                if (isPrime(temp)) answer++;
            }
        }
    }
    
    return answer;
}
