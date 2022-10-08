function solution(d, budget) {
    var answer = 0;
    d.sort((value1, value2) => value1 - value2);
    
    for(const value of d) {
        if(value > budget) break;
        budget -= value;
        answer++;
    }
    return answer;
}
