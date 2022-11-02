function solution(n) {
    const result = [];
    const NOTATION = 3; // n진법
    
    //10진법 > n진법 변환
    while(n > 0) {
        result.push(n % NOTATION);
        n = parseInt(n / NOTATION);
    }
    
    //앞뒤 반전
    result.reverse();
        
    //n진법 > 10진법 변환
    return result.reduce((prev, cur, index) => {
        return prev + (NOTATION ** index) * cur;
    });
}
