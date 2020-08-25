function solution(n) {
    var answer = [];
    n += "";
    n = n.split('').reverse();
    for(let i=0; i<n.length; i++){
        answer[i] = parseInt(n[i]);
    }
    return answer;
}
