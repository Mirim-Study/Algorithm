function solution(s) {
    var answer = '';
    let str = (s.toLowerCase()+"").split('');    
    const strlen = str.length;
    answer += str[0].toUpperCase();
    
    for (let i=1; i < strlen; i++){
        if(str[i-1] == ' '){
            answer += str[i].toUpperCase();
            continue;
        }
        answer += str[i];
    }
    
    return answer;
}
