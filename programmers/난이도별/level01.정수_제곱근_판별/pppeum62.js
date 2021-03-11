function solution(n) {
    var num = parseInt(Math.sqrt(n));
    
    return num ** 2 === n ? (num + 1) ** 2 : -1;
}
