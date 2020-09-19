function solution(s){
    let left = 1;
    
    // 먼저 ) 가 나오는 문자열은 처음부터 실패 출력
    if(s[0] == ')')
        return false;
    
    for(let i=1; i<s.length; i++){
        // 효율성 테스트에서 안됨
        // s[i] == '(' ? left++ : s[i] == ')' ? left == 0 ? false: left-- : true;
        
        // 괄호 개수를 비교하되 left가 0인데 ) 일 경우는 실패 출력
        if(s[i] == '(')
            left++;
        else if(s[i] == ')'){
            if(left == 0)
                return false;
            left--;
        }
    }
    
    return left == 0? true:false;
}
