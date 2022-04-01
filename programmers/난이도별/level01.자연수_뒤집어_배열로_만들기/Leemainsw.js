function solution(n) {
    const answer = n
    .toString()
    .split('')
    .map((num)=> Number(num))
    .reverse();

    return answer;
}
