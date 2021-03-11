function solution(n) {
    n += '';
    
    return parseInt(n.split('').sort().reverse().join(''));
}
