function solution(left, right) {
    var answer = 0;
    var cnt = 0;
    
    for (var i = left; i <= right; i++) {
        cnt = 0;
        
        for (var j = 0; j <= i; j++)
            if (i % j === 0) cnt++;
        
        answer += cnt % 2 === 0 ? i : i * -1;
    }
    
    return answer;
}
