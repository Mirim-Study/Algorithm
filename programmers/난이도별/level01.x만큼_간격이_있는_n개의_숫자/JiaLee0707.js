function solution(x, n) {
    return [...Array(n).keys()].map((value) => x * (value + 1))
}
