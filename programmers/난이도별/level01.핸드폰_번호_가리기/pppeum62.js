function solution(phone_number) {
    let answer = '';
    let len = phone_number.length
    
    for(let i = 0; i < len; i++) {
        if(i >= len - 4) {
            answer += phone_number[i];
        } else {
            answer += "*";
        }
    }
    
    return answer;
}
