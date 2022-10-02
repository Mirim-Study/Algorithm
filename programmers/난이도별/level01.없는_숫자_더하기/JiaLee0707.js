function solution(numbers) {
    const allSum = 45;
    const numSum = numbers.reduce((value1, value2) => value1 + value2);
    
    return allSum - numSum;
}
