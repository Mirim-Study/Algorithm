function solution(n, m) {
    var answer = [];
    var temp = 0;
    
     // n자리에 무조건 작은 수가 오게하기
    if(n>m){
        temp = m;
        m = n;
        n = temp;
    }
    
    // 최대공약수
    for(var i=n; i>=1; i--){
        if(n%i===0 && m%i===0){
            answer[0] = i;
            break;
        }
    }
    
    // 짠 코드인데 다른 사람의 코드가 더 효율적임
    // for(let i=1; i<=m; i++){
    //     if(n%i==0 && m%i==0){
    //         answer[0]=i;
    //     }
    // }
    
    // 최소공배수
    answer[1] = m*n/answer[0];
    
    return answer;
}
