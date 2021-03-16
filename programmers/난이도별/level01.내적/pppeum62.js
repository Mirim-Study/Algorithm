function solution(a, b) {
    var answer = 0;
    
    for (var i in a) {
        answer += a[i] * b[i];
    }
    
    return answer;
}
