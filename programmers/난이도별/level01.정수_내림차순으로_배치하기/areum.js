function solution(n) {
    var answer = 0;
    n += "";
    var number = n.split('');
    answer = Number(number.sort().reverse().join(''));
    return answer;
}
