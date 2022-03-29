function solution(n) {
    return Number(String(n).split("").map(e => e).sort((a, b) => b - a).join(""));
}
