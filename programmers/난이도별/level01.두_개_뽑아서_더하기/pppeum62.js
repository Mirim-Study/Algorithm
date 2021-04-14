function solution(numbers) {
    var answer = [];
    
    for (var i in numbers) {
        for (var j in numbers) {
            if (i === j) {
                continue;
            }
            
            answer.push(numbers[i] + numbers[j]);
        }
    }
    
    answer = Array.from(new Set(answer));
    
    return answer.sort((a, b) => a - b);
}
