function solution(absolutes, signs) {
    var answer = 0;
    
    for (var i in signs) {
        answer += signs[i] ? absolutes[i] : absolutes[i] * -1;
    }
    
    return answer;
}
