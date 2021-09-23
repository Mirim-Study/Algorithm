function solution(n) {
    const reducer = (a,b) => Number.parseInt(a) + Number.parseInt(b);
    return Number(n.toString(10).split('').reduce(reducer))
}
