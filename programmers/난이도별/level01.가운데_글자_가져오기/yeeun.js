function solution(s) {
    var answer = '';
    var s_length = s.length;
    if(s_length%2==0){ //짝수일때
        answer = s.substr(s_length/2-1,2);
    }else{ //홀수일때
        answer = s.substr(s_length/2,1);
    }
    
    return answer;
}
