function solution(numbers) {
    let allNumberSum = 45;
    let numbersSum = numbers.reduce((a, b) => a + b);
    
    return allNumberSum - numbersSum;
}
