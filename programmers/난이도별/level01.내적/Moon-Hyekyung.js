function solution(a, b) {
    return a.map((value, index) => value * b[index]).reduce((previous, current) => previous + current);
}
