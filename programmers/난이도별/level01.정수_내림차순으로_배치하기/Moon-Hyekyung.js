function solution(n) {
    return Number(n.toString(10).split('').sort().reverse().reduce((a,b)=>a+b+""))
}
