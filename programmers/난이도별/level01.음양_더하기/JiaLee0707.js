function solution(absolutes, signs) {
    var answer = 0;
    
    for (const [index, value] of absolutes.entries()) {
        answer += signs[index] ? value : -value;
}
    return answer;
}
