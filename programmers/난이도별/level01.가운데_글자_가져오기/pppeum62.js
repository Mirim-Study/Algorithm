function solution(s) {
    let answer = '';
    let len = s.length;
    let index = Math.floor(len / 2);
    
    if(len % 2 == 0) {
        answer = s.substr(index - 1, 2);
    } else {
        answer = s.substr(index, 1);
    }
    
    return answer;
}
