function solution(x) {
    return !(x%[...(x+"")].reduce((a,b) => +a + +b));
}
