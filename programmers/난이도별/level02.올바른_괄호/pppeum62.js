function solution(s){
    if (s[0] === ")") return false;

    var open = 0;
    var close = 0;
    
    s = [...s];
    
    for (var i in s) {
        if (s[i] === "(") open++;
        else close++;
        
        if (open < close) return false;
    }
    
    return open === close ? true : false;
}
