function solution(s) {
    var answer = '';
    var cnt = 0;
    
    for (var i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            cnt = 0;
            answer += ' ';
            continue;
        }
        
        answer += (cnt % 2 === 0) ? s[i].toUpperCase() : s[i].toLowerCase();
        cnt++;
    }
    
    return answer;
}
