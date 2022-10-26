function solution(numbers) {
    let answer = [];
    const numbers_length = numbers.length;
    
    for(let i=0; i<numbers_length; i++) {
        for(let j=i+1; j<numbers_length; j++) {
            answer.push(numbers[i] + numbers[j]);
        }
    }
    
    answer = [...new Set(answer)];
    answer.sort((a, b) => a - b);
    
    return answer;
}
