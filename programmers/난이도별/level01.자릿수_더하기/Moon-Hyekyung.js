function solution(n) {
    const reducer = (a,b) => Number(a) + Number(b);
    return Number(n.toString(10).split('').reduce(reducer))
}
