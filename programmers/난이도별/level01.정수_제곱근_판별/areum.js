function solution(n) {
    var num = Math.sqrt(n);
    
    if(num !== parseInt(num)){
        return -1;
    }
    else {
        return Math.pow(num+1,2);
    }
}
