function solution(s) {
    var str = s.split(' ');
    return Math.min.apply(null,str) + ' ' + Math.max.apply(null,str);
}
