function solution(n, m) {
    let answer = [];
    let min = n > m ? m : n;
    let max = n > m ? n : m;
    
    // 1
    // for (let i=1; i<=min; i++) {
    //     if (n%i === 0 && m%i === 0) {
    //         answer[0] = i;
    //         answer[1] = i * (n/i) * (m/i)
    //     }
    // }
    
    // 2
    while (min != 0) {
        answer[0] = max % min;
        max = min;
        min = answer[0];
    }
    answer[0] = max;
    
    answer[1] = n*m/answer[0];
    
    return answer;
}
