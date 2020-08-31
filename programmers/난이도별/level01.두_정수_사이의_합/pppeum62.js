function solution(a, b) {
    let answer = 0;
    let temp;
    
    if(a > b) {
        temp = b;
        b = a;
        a = temp;
    }
    
    for(let i = a; i <= b; i++) {
        answer += i;
    }
    
    return answer;
}
