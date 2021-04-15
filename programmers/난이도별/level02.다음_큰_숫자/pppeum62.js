function solution(n) {
    var answer = n;
    var cnt = n.toString(2).match(/1/g).length;
    
    while (answer++) {
        if (cnt === answer.toString(2).match(/1/g).length)
            return answer;
    }
}
