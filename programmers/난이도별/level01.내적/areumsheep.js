function solution(a, b) {
    var answer = 0;
    // const max_len = a.length;
    // for(let i=0; i< max_len; i++){
    //     answer += a[i] * b[i]
    // }
    answer = a.reduce((sum, _, idx) => sum += a[idx] * b[idx], 0);
    return answer;
}
