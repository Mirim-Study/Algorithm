function solution(a, b) {
    return a.reduce((sum, a, i) => sum += a * b[i], 0);
}
