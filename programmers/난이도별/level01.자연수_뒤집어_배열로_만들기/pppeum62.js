function solution(n) {
    n += '';
    
    return n.split('').reverse().map(str => parseInt(str));
}
