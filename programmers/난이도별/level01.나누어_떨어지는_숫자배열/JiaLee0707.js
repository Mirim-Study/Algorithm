function solution(arr, divisor) {
    let answer = arr.filter((value) => value % divisor === 0);
    return answer.length > 0 ? answer.sort((value1, value2) => value1 - value2) : [-1];
}
