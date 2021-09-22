function solution(s, n) {
    let answer = s.split('');
    
    for (let i in answer) {
        if (answer[i] === ' ') continue;
        
        answer[i] = answer[i].charCodeAt();
        
        if (answer[i] > 'Z'.charCodeAt()) {
            answer[i] += answer[i] + n > 'z'.charCodeAt() ? n - 26 : n;
        } else {
            answer[i] += answer[i] + n > 'Z'.charCodeAt() ? n - 26 : n;
        }
        
        answer[i] = String.fromCharCode(answer[i]);
    }
    
    return answer.join('');
}
