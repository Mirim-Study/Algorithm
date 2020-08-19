function solution(a, b) {
    var answer = '';
    const date = new Date(`2016, ${a},${b}`);
    answer = (date+"").substring(0,3);
    answer = answer.toUpperCase();
    return answer;
}
