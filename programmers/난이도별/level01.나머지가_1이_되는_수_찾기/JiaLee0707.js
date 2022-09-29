function solution(n) {
    var answer = n - 1;
    for(let i=2; i<n; i++) {
        if (n % i === 1) return i
    }
    return answer;
}
